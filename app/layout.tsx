import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'

import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({
  
  subsets: ['latin'],
  
  variable: '--font-exo-2',
})

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
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      
        
        <body className={`${exo2.variable} font-sans_serif`}>
        <Navbar />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            
            <main className="min-h-screen bg-gradient-to-tl from-purple-900/20 to-purple-950/5">
              {children}
              </main>
            
              <footer className="py-8 bg-gradient-to-tl from-purple-900/10 to-purple-950/100 text-gray-200">
              <div className="container mx-auto px-4 text-center">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold">AspireAI</h2>
                  <p className="text-sm">Your AI-powered career companion</p>
                </div>
                <nav className="mb-4 flex justify-center space-x-6 text-sm">
                  <a href="/about" className="hover:text-gray-400 transition">About</a>
                  <a href="/privacy" className="hover:text-gray-400 transition">Privacy Policy</a>
                  <a href="/terms" className="hover:text-gray-400 transition">Terms of Service</a>
                  
                </nav>
                <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} AspireAI. All rights reserved.</div>
              </div>
            </footer>

          </ThemeProvider>
          
    
          
        </body>
      </html>
    </ClerkProvider>
   
  );
}
