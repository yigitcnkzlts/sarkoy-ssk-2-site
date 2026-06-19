import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.fullName,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Şarköy SSK2",
    "SSK2 Sitesi",
    "Şarköy yazlık",
    "SSK2",
    "yazlık site",
    "site yönetimi",
    "Tekirdağ",
    "denize yakın yazlık",
    "yazlık ev",
    "Marmara kıyısı",
    "308 daire",
    "Şarköy site",
  ],
  authors: [{ name: siteConfig.managementName }],
  creator: siteConfig.managementName,
  openGraph: {
    title: siteConfig.fullName,
    description: siteConfig.description,
    locale: "tr_TR",
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
