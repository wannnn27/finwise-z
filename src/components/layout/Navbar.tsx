"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Fitur", href: "/fitur" },
    { name: "Harga", href: "/harga" },
    { name: "Webinar", href: "/webinar" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-6 md:px-10 h-16 flex items-center justify-between border-b",
          scrolled || mobileMenuOpen
            ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-200" 
            : "bg-white/80 backdrop-blur-sm border-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-1.5 no-underline group">
          <span className="text-xl font-black tracking-tighter transition-transform group-hover:scale-105">
            <span className="text-secondary">Finwize</span>
            <span className="text-primary ml-1">Z</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === link.href 
                  ? "text-secondary" 
                  : "text-slate-600 hover:text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm" className="h-9 text-slate-600 hover:text-secondary hover:bg-slate-50 font-medium">
                Masuk
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm" className="h-9 px-5 bg-primary hover:bg-primary/90 text-white shadow-sm transition-all font-medium rounded-md">
                Gabung Sekarang
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2 text-slate-600 md:hidden hover:bg-slate-50 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden pt-20 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-bold p-4 rounded-2xl transition-colors",
                  pathname === link.href 
                    ? "bg-secondary/5 text-secondary" 
                    : "text-slate-600 hover:bg-slate-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-slate-100">
              <Link href="/auth/login" className="w-full">
                <Button variant="outline" className="w-full h-12 rounded-xl font-bold border-slate-200">
                  Masuk
                </Button>
              </Link>
              <Link href="/auth/register" className="w-full">
                <Button className="w-full h-12 rounded-xl font-bold bg-primary text-white">
                  Daftar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
