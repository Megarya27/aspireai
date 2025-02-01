import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AspireAI",
  description: "A comprehensive AI career coach for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header>header</Header>
            <main className="min-h-screen">{children}</main>
            <footer className='bg-muted/50 py-12'>
              <div className='container mx-auto px-4 text-center text-gray-200'>
              <p>FOOTER</p>
              </div>
              </footer>
          </ThemeProvider>
      </body>
    </html>
  );
}
