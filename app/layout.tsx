import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zidlena Arabian Mejlis",
  description: "Discover the finest Arabian Mejlis crafted with exquisite attention to detail. Our company specializes in the design, construction, and distribution of these traditional seating solutions, bringing the beauty and comfort of Middle Eastern heritage to your home or business. Explore our collection and experience the timeless elegance of the Arabian Mejlis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
