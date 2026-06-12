"use client";

import { useEffect, useRef } from "react";

type Spark = {
  alpha: number;
  heat: number;
  phase: number;
  radius: number;
  speed: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

const MAX_DPR = 2;

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createSpark(width: number, height: number, fromBottom = false): Spark {
  return {
    alpha: randomBetween(0.28, 0.92),
    heat: randomBetween(0.35, 1),
    phase: randomBetween(0, Math.PI * 2),
    radius: randomBetween(0.8, 2.6),
    speed: randomBetween(0.22, 1.1),
    vx: randomBetween(-0.18, 0.18),
    vy: randomBetween(-0.95, -0.2),
    x: randomBetween(0, width),
    y: fromBottom ? randomBetween(height * 0.72, height + 80) : randomBetween(0, height),
  };
}

export function FireSparks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });

    if (!canvas || !context) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = {
      active: false,
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.42,
    };
    let animationFrame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let sparks: Spark[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = prefersReducedMotion.matches
        ? Math.max(24, Math.floor(width / 34))
        : Math.min(150, Math.max(62, Math.floor((width * height) / 11800)));

      if (sparks.length < targetCount) {
        sparks = [
          ...sparks,
          ...Array.from({ length: targetCount - sparks.length }, () => createSpark(width, height)),
        ];
      } else {
        sparks = sparks.slice(0, targetCount);
      }
    };

    const resetSpark = (spark: Spark) => {
      const nextSpark = createSpark(width, height, true);
      Object.assign(spark, nextSpark);
    };

    const drawSpark = (spark: Spark, time: number) => {
      const flicker = 0.72 + Math.sin(time * spark.speed * 0.004 + spark.phase) * 0.28;
      const glow = spark.radius * (4.8 + spark.heat * 7);
      const gradient = context.createRadialGradient(spark.x, spark.y, 0, spark.x, spark.y, glow);

      gradient.addColorStop(0, `rgba(255, 238, 162, ${spark.alpha * flicker})`);
      gradient.addColorStop(0.22, `rgba(255, 94, 28, ${spark.alpha * 0.72 * flicker})`);
      gradient.addColorStop(0.55, `rgba(198, 10, 16, ${spark.alpha * 0.3})`);
      gradient.addColorStop(1, "rgba(255, 26, 26, 0)");

      context.fillStyle = gradient;
      context.beginPath();
      context.arc(spark.x, spark.y, glow, 0, Math.PI * 2);
      context.fill();

      context.strokeStyle = `rgba(255, 177, 74, ${spark.alpha * 0.42})`;
      context.lineWidth = Math.max(0.35, spark.radius * 0.42);
      context.beginPath();
      context.moveTo(spark.x, spark.y);
      context.lineTo(spark.x - spark.vx * 18, spark.y - spark.vy * 18);
      context.stroke();
    };

    const render = (time: number) => {
      context.clearRect(0, 0, width, height);

      for (const spark of sparks) {
        if (!prefersReducedMotion.matches) {
          const dx = spark.x - pointer.x;
          const dy = spark.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          const influence = pointer.active ? Math.max(0, 1 - distance / 190) : 0;
          const swirl = influence * 0.95;

          spark.vx += (dx / Math.max(distance, 1)) * influence * 0.028;
          spark.vy += (dy / Math.max(distance, 1)) * influence * 0.018;
          spark.x += spark.vx + Math.sin(time * 0.0012 + spark.phase) * 0.2 + dy * 0.0025 * swirl;
          spark.y += spark.vy - spark.speed * 0.18 - dx * 0.0016 * swirl;
          spark.vx *= 0.992;
          spark.vy *= 0.996;
        }

        drawSpark(spark, time);

        if (spark.y < -80 || spark.x < -120 || spark.x > width + 120) {
          resetSpark(spark);
        }
      }

      if (!prefersReducedMotion.matches) {
        animationFrame = requestAnimationFrame(render);
      }
    };

    const startAnimation = () => {
      cancelAnimationFrame(animationFrame);

      if (prefersReducedMotion.matches) {
        render(0);
        return;
      }

      animationFrame = requestAnimationFrame(render);
    };

    const updatePointer = (event: PointerEvent) => {
      pointer.active = true;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const deactivatePointer = () => {
      pointer.active = false;
    };

    const handleResize = () => {
      resize();

      if (prefersReducedMotion.matches) {
        render(0);
      }
    };

    const handleMotionPreferenceChange = () => {
      resize();
      startAnimation();
    };

    resize();
    startAnimation();

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("pointerleave", deactivatePointer);
    prefersReducedMotion.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerleave", deactivatePointer);
      prefersReducedMotion.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, []);

  return <canvas aria-hidden="true" className="fire-sparks-canvas" ref={canvasRef} />;
}
