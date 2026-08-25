'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu01Icon, Cancel01Icon } from "hugeicons-react";
import { cn } from "@/lib/utils";
import LogoIcon from "@/assets/logo-icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm py-3" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105">
             <LogoIcon className="w-full h-full text-primary" />
          </div>
          <span className="font-mono font-bold text-sm tracking-widest uppercase text-white">AIHUNT</span>
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-white/60">
          <Link href="/category/ai" className="hover:text-white transition-colors">AI Models</Link>
          <Link href="/category/ai" className="hover:text-white transition-colors">SWE Evals</Link>
          <Link href="/category/ai" className="hover:text-white transition-colors">Agents</Link>
          <Link href="/category/ai" className="hover:text-white transition-colors">Leaderboard</Link>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/submit" className="flex items-center h-10 bg-[#a3ff12] text-black font-mono font-bold tracking-widest uppercase px-6 text-xs hover:bg-[#92e810] transition-colors active:scale-[0.96]">
            Submit AI Tool
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            className="text-foreground p-1 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <Cancel01Icon className="w-6 h-6" /> : <Menu01Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#101010] border-b border-border/50 shadow-lg p-4 flex flex-col gap-4 animate-fade-in-up">
          <Link href="/category/ai" className="text-white/80 hover:text-white font-mono text-sm py-2">AI Models</Link>
          <Link href="/category/ai" className="text-white/80 hover:text-white font-mono text-sm py-2">SWE Evals</Link>
          <Link href="/submit" className="w-full text-center bg-[#a3ff12] text-black font-mono font-bold tracking-widest uppercase px-4 py-4 text-xs hover:bg-[#92e810] transition-colors active:scale-[0.96] mt-2">
            Submit AI Tool
          </Link>
        </div>
      )}
    </header>
  );
}
