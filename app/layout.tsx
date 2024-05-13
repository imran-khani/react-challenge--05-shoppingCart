import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientOnly from "@/components/ClientOnly";
import LoginModal from "@/components/LoginModal";
import StoreProvider from "@/components/StoreProvider";
import Navbar from "@/components/Navbar";
import ToastProvider from "@/components/ToastProvider";
import Cart from "@/components/Cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redux ShoppingCart",
  description: "A simple shopping cart built with Redux Toolkit and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ClientOnly>
          <Cart />
            <ToastProvider />
            <LoginModal />
            <Navbar />
          </ClientOnly>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
