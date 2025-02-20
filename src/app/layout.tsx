import type { Metadata } from "next";
import icims from "@/../public/icims.png"
import Image from "next/image"
import { Inter } from "next/font/google";
import "./globals.css";
import IMG from "@../../../public/abstract-flow-background-with-flowing-lines.jpg"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Information Management Group, Inc.",
  description: "imgva.com",
  icons:["/favicon.ico?v==4"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` overflow-x-hidden ${inter.className}`}>

            <header className="py-5 px-11 bg-transparent">
              
            <Header/>
    
            </header>
                  
                    {children}
                
        
        
        </body>
    </html>
  );
}
