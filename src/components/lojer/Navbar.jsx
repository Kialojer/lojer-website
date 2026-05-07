import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Solution', href: '#solution' },
  { label: 'Problem', href: '#problem' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Road map', href: '#roadmap' },
  { label: 'About', href: '#about-founder' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-0.5 text-xl font-bold font-space">
          <span className="text-primary">L</span>
          <span className="text-foreground">OJER</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:info@lojer.app"
            className="px-5 py-2 text-sm font-medium border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
          >
            INVEST
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 px-6 py-6 space-y-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:info@lojer.app"
            className="inline-block px-5 py-2 text-sm font-medium border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
          >
            INVEST
          </a>
        </div>
      )}
    </nav>
  );
}