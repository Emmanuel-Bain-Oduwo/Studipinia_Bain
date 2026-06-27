import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studipinia.com"),
  title: {
    default: "Studipinia — Your Gateway to Global Education",
    template: "%s | Studipinia",
  },
  description:
    "Studipinia helps African students discover top universities in India, apply for admission, receive visa guidance, and study abroad with 100% free counselling and expert support.",
  keywords: [
    "study in India",
    "Indian universities",
    "international education",
    "Parul University",
    "study abroad Africa",
    "university admission India",
    "visa assistance India",
    "MBBS in India",
    "engineering in India",
    "scholarship India",
  ],
  authors: [{ name: "Studipinia" }],
  creator: "Studipinia",
  publisher: "Studipinia",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studipinia.com",
    siteName: "Studipinia",
    title: "Studipinia — Your Gateway to Global Education",
    description:
      "Helping African students access quality higher education in India through transparent, technology-driven admissions.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studipinia — Your Gateway to Global Education",
    description:
      "Helping African students access quality higher education in India.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-white text-[#111827]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
