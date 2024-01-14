"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "I Love Wallpapers",
  description: "Generated by create next app",
}; */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-bgPrimary text-colorText dark`}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <main className="px-8 py-8 md:px-18 lg:px-48">{children}</main>
          <Footer/>
        </QueryClientProvider>
      </body>
    </html>
  );
}
