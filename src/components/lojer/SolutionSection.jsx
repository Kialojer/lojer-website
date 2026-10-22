import React, { useRef, useEffect } from 'react';
import { Eye, Blocks, Store, Bot, Cpu, Wallet, ShieldCheck, LineChart } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from './GlassCard';
import SectionBackground from './SectionBackground';
import FloatingShapes from './FloatingShapes';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Eye, title: 'Our Vision', desc: 'A transparent, reward-driven platform powered by real-time data.', color: 'primary' },
  { icon: Blocks, title: 'Blockchain Ecosystem', desc: 'Empowering retailers with dedicated tokens and NFTs on TON.', color: 'accent' },
  { icon: Store, title: 'Community Marketplace', desc: 'Equal visibility powered by user-generated content.', color: 'tertiary' },
  { icon: Bot, title: 'Intelligent AI Agents', desc: 'Smart agents that detect fake content and automate purchasing.', color: 'primary' },
  { icon: Cpu, title: 'Advanced Tech', desc: 'Fraud-proof architecture with gas-free transactions.', color: 'accent' },
  { icon: Wallet, title: 'LOJER Smart Wallet', desc: 'Non-custodial W5 standard wallet on TON network.', color: 'tertiary' },
  { icon: ShieldCheck, title: 'C.N.N Verification', desc: 'Custom AI verifying GPS and timestamps on photos.', color: 'primary' },
  { icon: LineChart, title: 'AI Price Analysis', desc: 'Real-time scans to find the cheapest nearby stores.', color: 'accent' },
];

export default function SolutionSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // 3D Staggered entry for cards
    gsap.fromTo('.feature-card', 
      { opacity: 0, y: 100, rotateX: 45, transformPerspective: 1000 },
      {
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section id="solution" ref={sectionRef} className="relative py-32 overflow-hidden">
      <SectionBackground gradient="mixed" />
      
      {/* Decorative 3D shapes */}
      <div className="absolute top-20 right-10 opacity-30">
        <FloatingShapes type="icosahedron" color="#E8364E" className="w-40 h-40" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-30">
        <FloatingShapes type="torus" color="#00FFD1" className="w-40 h-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20 perspective-1000">
          <h2 className="font-space text-4xl md:text-6xl font-black mb-6">
            Technology & <span className="text-gradient-primary">Vision</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A revolutionary platform merging e-commerce, cryptocurrency, and AI-powered price comparison.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="feature-card h-full preserve-3d">
              <GlassCard glowColor={feature.color} className="h-full group">
                <div className="mb-6 relative">
                  <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${
                    feature.color === 'primary' ? 'bg-primary' : 
                    feature.color === 'accent' ? 'bg-accent' : 'bg-tertiary'
                  }`} />
                  <feature.icon className={`w-10 h-10 relative z-10 animate-float ${
                    feature.color === 'primary' ? 'text-primary' : 
                    feature.color === 'accent' ? 'text-accent' : 'text-tertiary'
                  }`} style={{ animationDelay: `${i * 0.2}s` }} />
                </div>
                <h3 className="font-space font-bold text-xl mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{feature.desc}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}