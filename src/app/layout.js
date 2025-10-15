"use client";

import Header from "@/layout/Header";
import "./globals.css";
import Footer from "@/layout/Footer";
import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const myFont = localFont({
  src: "../../public/fonts/BYekan.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-yekan",
});

const queryClient = new QueryClient();
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" className={myFont.variable}>
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
