"use client"

import { Heart, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Rent Property", href: "/properties" },
    { label: "New Projects", href: "/new-projects" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          ghardikhado
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary transition text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/favorites" className="p-2 hover:bg-muted rounded-full transition hidden md:block">
            <Heart className="w-5 h-5" />
          </Link>
          <Link href="/profile" className="p-2 hover:bg-muted rounded-full transition hidden md:block">
            <User className="w-5 h-5" />
          </Link>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-sm">Contact</Button>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-full transition">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
