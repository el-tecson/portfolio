import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/ui/layout-wrapper";
import BodyColorController from "@/components/ui/body-color-controller";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      <body className="min-h-full flex flex-col transition-colors duration-500 bg-bg">
        <LayoutWrapper>{children}</LayoutWrapper>
        <BodyColorController />
      </body>
    </html>
  );
}
