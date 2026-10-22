import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import GlowButton from './GlowButton';

const footerLinks = [
  { label: 'Solution', href: '#solution' },
  { label: 'Problem', href: '#problem' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Road map', href: '#roadmap' },
  { label: 'About', href: '#about-founder' },
];

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !agreed) {
      toast.error('Please fill in your email and agree to subscribe.', {
        style: { background: '#0f0f1e', border: '1px solid #E8364E', color: '#fff' }
      });
      return;
    }
    toast.success('Thank you for subscribing!', {
      style: { background: '#0f0f1e', border: '1px solid #00FFD1', color: '#fff' }
    });
    setEmail('');
    setAgreed(false);
  };

  return (
    <footer className="relative pt-24 pb-12 border-t border-border/20 overflow-hidden">
      {/* Animated top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary via-accent to-transparent opacity-50" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-primary/10 blur-[150px] rounded-t-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Logo & contact */}
          <div className="md:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Managed by</p>
            <div className="font-space font-black text-3xl mb-6">
              <span className="text-primary drop-shadow-[0_0_10px_rgba(232,54,78,0.5)]">L</span>
              <span className="text-foreground">OJER</span>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Merging e-commerce, cryptocurrency, and AI-powered price comparison in one seamless experience.
            </p>

            <div className="flex flex-col gap-4">
              <a href="mailto:info@lojer.app" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group w-fit">
                <div className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center group-hover:border-accent/50 group-hover:shadow-[0_0_15px_rgba(0,255,209,0.3)] transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium tracking-wide">info@lojer.app</span>
              </a>
              
              <a href="https://www.linkedin.com/company/lojer-app/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-[#0A66C2] transition-colors group w-fit">
                <div className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center group-hover:border-[#0A66C2]/50 group-hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="font-medium tracking-wide">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Column 2: Nav links */}
          <div className="md:col-span-3">
            <h3 className="font-space font-bold text-xl mb-6">Navigation</h3>
            <nav className="space-y-4 flex flex-col">
              {footerLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-white transition-colors w-fit flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Newsletter */}
          <div className="md:col-span-4">
            <h3 className="font-space font-bold text-xl mb-6">Newsletter</h3>
            <div className="liquid-glass p-6 rounded-2xl border-border/40">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-muted-foreground/70"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-border bg-background text-accent focus:ring-accent focus:ring-offset-background"
                  />
                  <label htmlFor="terms" className="text-xs leading-relaxed text-muted-foreground cursor-pointer select-none">
                    I agree to receive marketing communications and accept the privacy policy.
                  </label>
                </div>
                <GlowButton onClick={handleSubmit} variant="solid" className="w-full py-3">
                  Subscribe
                </GlowButton>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/20 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LOJER App. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}