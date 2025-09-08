import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.siteUrl || 'https://onibiocare.com'),
  title: {
    default: process.env.siteName || 'MigoLoop',
    template: `%s | ${process.env.siteName || 'MigoLoop'}`,
  },
  description: process.env.siteDescription || 'High-quality health care products',
  keywords: ['health', 'healthcare', 'biocare', 'medical products'],
  authors: [{ name: 'MigoLoop Team' }],
  creator: 'MigoLoop',
  publisher: 'MigoLoop',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: process.env.locale || 'en_US',
    url: process.env.siteUrl || 'https://onibiocare.com',
    title: process.env.siteName || 'MigoLoop',
    description: process.env.siteDescription || 'High-quality health care products',
    siteName: process.env.siteName || 'MigoLoop',
  },
  twitter: {
    card: 'summary_large_image',
    title: process.env.siteName || 'MigoLoop',
    description: process.env.siteDescription || 'High-quality health care products',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://onibiocare.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={process.env.locale?.split('_')[0] || 'en'} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
