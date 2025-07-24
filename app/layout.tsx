import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import NavbarLoggedIn from "@/components/NavbarLoggedIn";
import { Roboto } from "next/font/google";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Choose weights you need
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title: "Alpha",
  description: "Alpha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarLoggedIn />
        <Breadcrumbs />
        <main className="max-w-screen-xl flex flex-col gap-y-5 items-center justify-center m-auto">
          {children}
        </main>
        <Footer />

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
