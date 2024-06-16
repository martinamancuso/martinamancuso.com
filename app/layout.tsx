import React from "react";
import { FontProvider } from "./font-context";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./ui/sidebar/sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <FontProvider>
        <body className={`${poppins.className}`}>
          <div className="lg:flex lg:w-screen lg:h-screen">
            <Sidebar />
            <main className="flex-grow overflow-auto">{children}</main>
          </div>
        </body>
      </FontProvider>
    </html>
  );
}
