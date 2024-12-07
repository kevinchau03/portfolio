import type { Metadata } from "next";
import { Quicksand, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin's Portfolio Website",
  description: "Peek into my projects and learn more about me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex-grow mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
