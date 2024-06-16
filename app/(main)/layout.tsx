import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../../app/globals.css';
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Gen Crypto Yield Platform",
  description: "Control Your Staking With Soltitude",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
