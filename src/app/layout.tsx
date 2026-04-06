import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E.L. Tecson — Web Developer | Emmanuel Leu Tecson",
  description: "I build fast, reliable web applications that solve real problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="font-sans h-full antialiased uppercase tracking-wider"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
