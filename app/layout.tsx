import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yasir Khalid | Computer Engineer",
  description:
    "A dark, animated personal website for Yasir Khalid, showcasing work across UE5.7 games, websites, and Flutter applications.",
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
