import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finwise Z - Financial Literacy for Gen Z",
  description: "Platform edutech keuangan untuk generasi Z usia 18–30 tahun. Edukasi, coaching personal, dan tracking keuangan dalam satu ekosistem digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}

