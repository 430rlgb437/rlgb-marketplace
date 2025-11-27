import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RLGB لبيع المنتجات الرقمية",
  description: "منصتك الموثوقة لبيع وشراء المنتجات الرقمية باللغة العربية. برامج، كتب إلكترونية، قوالب، دورات وغيرها الكثير.",
  keywords: ["منتجات رقمية", "بيع المنتجات الرقمية", "السوق العربي", "برامج", "كتب إلكترونية", "قوالب", "دورات", "RLGB"],
  authors: [{ name: "RLGB Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "RLGB لبيع المنتجات الرقمية",
    description: "منصتك الموثوقة لبيع وشراء المنتجات الرقمية باللغة العربية",
    url: "https://rlgb.com",
    siteName: "RLGB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RLGB لبيع المنتجات الرقمية",
    description: "منصتك الموثوقة لبيع وشراء المنتجات الرقمية باللغة العربية",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}