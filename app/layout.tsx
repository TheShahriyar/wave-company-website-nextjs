import "./globals.css";
import type { Metadata } from "next";
import { asap, openSans } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wave - Multipurpose Company Website",
  description: "This is website descriptions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${asap.variable} ${openSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
