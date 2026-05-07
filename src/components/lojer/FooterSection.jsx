import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';

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
      toast.error('Please fill in your email and agree to subscribe.');
      return;
    }
    toast.success('Thank you for subscribing!');
    setEmail('');
    setAgreed(false);
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-border/30">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo & contact */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Managed by</p>
            <div className="font-space font-black text-xl mb-4">
              <span className="text-primary">L</span>
              <span className="text-foreground">OJER</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Follow Us On:</p>
            <div className="flex items-center gap-4 mb-4">
              <a href="https://www.linkedin.com/company/lojer-app/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Mail className="w-4 h-4" />
              <span>info@lojer.app</span>
            </div>
          </div>

          {/* Column 2: Nav links */}
          <div>
            <div className="font-space font-bold text-lg mb-4">
              <span className="text-primary">L</span>OJER
            </div>
            <nav className="space-y-3 flex flex-col">
              {footerLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <div className="font-space font-bold text-lg mb-4">Newsletter</div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 rounded border-primary text-primary focus:ring-primary"
                />
                <label htmlFor="terms" className="text-sm font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Accept terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}