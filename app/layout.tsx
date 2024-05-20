import React from "react";
import { FontProvider } from "./FontContext";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Martina Mancuso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <FontProvider>
        <body className={`${poppins.className}`}>{children}</body>
      </FontProvider>
    </html>
  );
}
