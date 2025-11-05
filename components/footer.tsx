import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">ghardikhado</h3>
            <p className="text-white/70">Finding your dream property, one home at a time.</p>
            <div className="flex gap-4 mt-6">
              <Facebook className="w-5 h-5 hover:text-accent transition cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-accent transition cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-accent transition cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-accent transition cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link href="/properties?type=rent" className="hover:text-white transition">
                  Rent Property
                </Link>
              </li>
              <li>
                <Link href="/new-projects" className="hover:text-white transition">
                  New Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/price-trends" className="hover:text-white transition">
                  Price Trends
                </Link>
              </li>
              <li>
                <Link href="/investment-guide" className="hover:text-white transition">
                  Investment Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/70 text-sm">
            © 2025 ghardikhado. All rights reserved. | Premium Real Estate Discovery Platform
          </p>
        </div>
      </div>
    </footer>
  )
}
