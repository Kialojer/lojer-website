import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GlowButton from './GlowButton';

const navLinks = [
  { label: 'Solution', href: '#solution' },
  { label: 'Problem', href: '#problem' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Road map', href: '#roadmap' },
  { label: 'About', href: '#about-founder' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/80 border-b border-foreground/10 backdrop-blur-xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-0.5 text-xl font-bold font-space tracking-[-0.06em] group">
          <span className="text-primary transition-all duration-300">L</span>
          <span className="text-foreground">OJER</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground hover:text-white transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <GlowButton href="mailto:info@lojer.app" variant="outline" className="text-sm px-6 py-2">
            INVEST
          </GlowButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden liquid-glass border-t border-border/30 px-6 py-6 space-y-4 absolute top-full left-0 right-0 animate-accordion-down">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <GlowButton href="mailto:info@lojer.app" variant="solid" className="w-full text-sm">
              INVEST
            </GlowButton>
          </div>
        </div>
      )}
    </nav>
  );
}
