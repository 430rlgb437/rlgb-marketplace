import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RLGB لبيع المنتجات الرقمية",
  description: "منصتك الموثوقة لبيع وشراء المنتجات الرقمية باللغة العربية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
