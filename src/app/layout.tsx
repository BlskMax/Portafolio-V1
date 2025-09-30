'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { NavProvider } from "@/context/NavContext";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-absolute-black">
      <Navbar />
      <body className={`${inter.className} bg-black text-white `}>
        {children}
      </body>
    </html>
  );
}
