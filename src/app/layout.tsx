import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Best Bruk"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="m-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
