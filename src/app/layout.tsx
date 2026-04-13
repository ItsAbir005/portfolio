import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";


const inconsolata = Inconsolata({
  weight: ["400", "700", "900"]
});

export const metadata: Metadata = {
  title: "Abir Maity",
  description: "Abir Maity's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
