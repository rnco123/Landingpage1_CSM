"use client";
import "regenerator-runtime/runtime";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <body className={inter.className}>{children}</body>
      </LocalizationProvider>
    </html>
  );
}
