import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
            
            <main className="min-h-screen">
              {children}
              </main>
            
            <footer className=' py-12 bg-gradient-to-tl from-purple-900/10 to-purple-950/100'>
              <div className='container mx-auto px-4 text-center text-gray-200'>
              <p>FOOTER</p>
              </div>
              </footer>
          </ThemeProvider>
          
    
          
        </body>
      </html>
    </ClerkProvider>
   
  );
}
