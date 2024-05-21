import React from "react";
import { FontProvider } from "./FontContext";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./ui/sidebar/sidebar";

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
        <body className={`${poppins.className}`}>
          <div className="lg:flex lg:w-screen lg:h-screen">
            <Sidebar />
            <main className="pt-24 pb-12 px-8 flex-grow overflow-auto">
              {children}
            </main>
          </div>
        </body>
      </FontProvider>
    </html>
  );
}
