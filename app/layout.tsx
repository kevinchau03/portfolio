import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from 'next-themes';
import { LoadingProvider } from '@/app/components/LoadingProvider';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kevin Chau | Software Engineer",
    template: "%s | Kevin Chau",
  },
  description: "Software engineer portfolio for Kevin Chau featuring projects, experience, and background.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kevin Chau | Software Engineer",
    description: "Software engineer portfolio for Kevin Chau featuring projects, experience, and background.",
    url: siteUrl,
    siteName: "Kevin Chau Portfolio",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Chau | Software Engineer",
    description: "Software engineer portfolio for Kevin Chau featuring projects, experience, and background.",
  },
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
