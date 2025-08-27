import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from 'next-themes';

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400","700"],
});

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${gabarito.className} antialiased`}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={true}
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
