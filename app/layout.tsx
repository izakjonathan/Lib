import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio UI",
  description: "A reusable component library and starter kit.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
