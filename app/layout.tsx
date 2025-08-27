import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from 'next-themes';
import { LoadingProvider } from '@/app/components/LoadingProvider';

const monaspace = localFont({
  src: [
    {
      path: './fonts/MonaspaceNeonFrozen-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-monaspace',
  display: 'swap',
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
      <body className={`${monaspace.className} antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={true}
          disableTransitionOnChange
        >
          <LoadingProvider>
            <Nav />
            {children}
            <Analytics />
            <Footer />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
