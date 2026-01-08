import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohrritter Minden - Kanal- & Rohrreinigung",
  description: "Professionelle Rohrreinigungsdienste – 24 Stunden am Tag, 7 Tage die Woche verfügbar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="canonical" href="rohrritter-minden.de/" />
        <title>Rohrritter Minden - Kanal- & Rohrreinigung</title>
        <meta name="description" content="Professionelle Rohrreinigungsdienste – 24 Stunden am Tag, 7 Tage die Woche verfügbar" />
        <meta name="keywords" content="Rohrreinigung, Kanalreinigung, Notdienst, Minden, Sanitär, 24h Service, Küchenabfluss reinigen, Toilette verstopft, Notdienst, Kanal-TV-Untersuchung" />
        <meta property="og:title" content="Rohrritter Minden - Kanal- & Rohrreinigung" />
        <meta property="og:description" content="Professionelle Rohrreinigungsdienste – 24 Stunden am Tag, 7 Tage die Woche verfügbar" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Analytics />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
