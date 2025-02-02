"use client";  // This makes sure it's a Client Component

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ReduxProvider from "@/components/reduxprovider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ReduxProvider>
        <html lang="en">
          <body className={inter.className}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </ReduxProvider>
    </ClerkProvider>
  );
}
