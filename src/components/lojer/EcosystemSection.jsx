import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBackground from './SectionBackground';

gsap.registerPlugin(ScrollTrigger);

const ecosystemItems = [
  { label: 'LOJ TOKEN', color: 'primary', angle: 0 },
  { label: 'AI AGENTS', color: 'accent', angle: 60 },
  { label: 'BLOCKCHAIN', color: 'tertiary', angle: 120 },
  { label: 'MARKET PLACE', color: 'primary', angle: 180 },
  { label: 'WALLET & NFTs', color: 'accent', angle: 240 },
  { label: 'SUBSCRIBE', color: 'tertiary', angle: 300 }
];

export default function EcosystemSection() {
  const containerRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Parallax effect on scroll
    gsap.to(ringRef.current, {
      rotateZ: 360,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Animate items counter-rotation to stay upright
    gsap.to('.eco-item-label', {
      rotateZ: -360,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });
  }, []);

  const getColorClass = (color) => {
    if (color === 'primary') return 'text-primary shadow-[0_0_15px_rgba(232,54,78,0.5)] border-primary';
    if (color === 'accent') return 'text-accent shadow-[0_0_15px_rgba(0,255,209,0.5)] border-accent';
    return 'text-tertiary shadow-[0_0_15px_rgba(124,58,237,0.5)] border-tertiary';
  };

  return (
    <section id="tech-vision" ref={containerRef} className="relative py-40 overflow-hidden">
      <SectionBackground gradient="indigo" opacity={0.2} withGrid />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <h2 className="font-space text-4xl md:text-5xl font-black mb-4">
            The <span className="text-gradient-tertiary neon-text-accent">Ecosystem</span>
          </h2>
        </div>

        {/* 3D Orbital Diagram */}
        <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center perspective-1000">
          
          {/* Central Core */}
          <div className="absolute z-20 flex flex-col items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-background border border-border/50 liquid-glass flex items-center justify-center shadow-[0_0_50px_rgba(232,54,78,0.2)] animate-glow-pulse">
              <span className="font-space font-black text-2xl text-foreground">
                <span className="text-primary">L</span>OJER
              </span>
            </div>
          </div>

          {/* 3D Rotating Ring */}
          <div 
            ref={ringRef}
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] preserve-3d"
            style={{ transform: 'rotateX(60deg)' }}
          >
            {/* Glowing orbital path */}
            <div className="absolute inset-0 rounded-full border border-border/30 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" />
            <div className="absolute inset-0 rounded-full border border-primary/20 scale-105" />
            <div className="absolute inset-0 rounded-full border border-accent/20 scale-95" />

            {/* Orbiting Nodes */}
            {ecosystemItems.map((item, i) => {
              // Calculate position on circle
              const rad = (item.angle * Math.PI) / 180;
              const radius = 50; // 50%
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);

              return (
                <div 
                  key={item.label}
                  className="absolute preserve-3d"
                  style={{ 
                    left: `${x}%`, 
                    top: `${y}%`, 
                    transform: 'translate(-50%, -50%) rotateX(-60deg)' // Counter-rotate X to face camera
                  }}
                >
                  <div className={`eco-item-label liquid-glass px-4 py-2 rounded-full border ${getColorClass(item.color)} whitespace-nowrap font-space font-bold text-xs md:text-sm tracking-widest bg-background/80`}>
                    {item.label}
                  </div>
                  {/* Glowing connector dot */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full -z-10 ${
                    item.color === 'primary' ? 'bg-primary shadow-[0_0_10px_#E8364E]' : 
                    item.color === 'accent' ? 'bg-accent shadow-[0_0_10px_#00FFD1]' : 'bg-tertiary shadow-[0_0_10px_#7C3AED]'
                  }`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}