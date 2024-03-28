import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components";
import { Navbar } from "@/components";


export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        </body>
    </html>
  );
}
