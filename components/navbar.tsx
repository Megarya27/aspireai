"use client"
import {

    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import { Button } from "@/components/ui/button"
import { Bot, Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react" 

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">AspireAI</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/resume-optimiser">Resume Optimiser</NavLink>
        <NavLink href="/interview-prep">Interview Prep</NavLink>
        <NavLink href="/cover-letter-generator">Cover Letter Generator</NavLink>
        <NavLink href="/career-advisor">Career Advisor</NavLink>
      </div>

      
        
          <div>
            <SignedOut>
            
          <SignInButton>
            <Button  className='hover:bg-purple-400 '>Sign In</Button>
            
          </SignInButton>
          
        </SignedOut>
        <div>
        <SignedIn>
        <Link href="/dashboard"></Link>
          <UserButton
          appearance={{
            elements: {
               avatarBox: 'w-10 h-10',
                avatarImage: 'w-full h-full object-cover',
                userButton: 'text-white',
                userButtonContent: 'flex items-center space-x-2',
                userButtonName: 'font-medium',
                userButtonEmail: 'text-gray-300',
                userButtonDropdown: 'bg-white text-black',
                userButtonPopoverActionCard: 'shadow-xl',
                userPreviewMainIdentifier: 'font-medium',
            }
          }} />
          
        </SignedIn> 
        </div>
        </div>
       
        
      

      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="w-6 h-6" />
        
        
      </Button>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </Link>
  )
}

