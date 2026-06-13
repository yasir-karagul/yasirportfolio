import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yasir Khalid | Computer Engineer",
  description:
    "Evidence-backed portfolio for Yasir Khalid, a computer engineer working across Flutter production systems, Next.js platforms, UAV software, AI, and UE5.7 real-time systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
