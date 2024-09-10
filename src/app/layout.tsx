import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar"
import Footer from "./footer"

const jbmono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahana Bhattacharya",
  description: "Ahana's Personal Site <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jbmono.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
