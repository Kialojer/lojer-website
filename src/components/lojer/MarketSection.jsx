import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from './AnimatedCounter';
import SectionBackground from './SectionBackground';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '59 B$', desc: 'In 2024, e-commerce in Brazil reached a turnover of 59 billion$' },
  { value: '10.5%', desc: 'representing a growth compared to the previous year' },
  { value: '91.3 M', desc: '91.3 million online buyers' },
  { value: '414.9 M', desc: 'The sector registered 414.9 million orders' },
];

export default function MarketSection({ christStatueImg }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.stat-item',
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1, scale: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">
      <SectionBackground gradient="mixed" opacity={0.15} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="font-space text-4xl md:text-5xl font-black mb-20 text-center">
          Market <span className="text-gradient-accent">Potential</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center">
              <div className="font-space font-black text-4xl md:text-5xl text-accent mb-4 neon-text-accent">
                <AnimatedCounter value={stat.value} duration={2.5} />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px] mx-auto">{stat.desc}</p>
              <div className="mt-4 mx-auto h-0.5 w-16 bg-gradient-to-r from-transparent via-accent/50 to-transparent rounded-full" />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-16 items-center">
          <div className="md:col-span-2 space-y-6 liquid-glass p-8 rounded-3xl border border-border/30 relative">
            <div className="absolute top-0 left-10 w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Brazil's e-commerce market has seen remarkable growth, reaching 59 billion USD in 2024.
              Pix is now the most used payment method, accounting for 40% of transactions.
              The online food delivery sector is booming as well, with USD 12.8 billion in revenue and projections to hit USD 22.4 billion by 2030.
            </p>
            
            <div className="flex items-center gap-4 py-2">
              <div className="w-12 h-[1px] bg-border" />
              <h3 className="font-space font-black tracking-widest text-primary text-xl uppercase">Meanwhile</h3>
              <div className="w-12 h-[1px] bg-border" />
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              In 2024, Brazil's crypto market hit record levels, with R$115.7 billion traded in September alone and R$247.8 billion from January to September.
              Tether (USDT) dominated trading, and over 66% of transactions were made by companies.
            </p>
            <p className="text-foreground text-lg leading-relaxed font-medium">
              With nearly <span className="text-accent neon-text-accent font-black">10 million</span> users, Brazil is becoming a major hub for crypto. LOJER is poised to leverage this momentum.
            </p>
          </div>

          <div className="flex justify-center relative perspective-1000">
            <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full animate-glow-pulse" />
            <img
              src={christStatueImg}
              alt="Christ the Redeemer"
              className="w-48 md:w-64 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] preserve-3d animate-float"
              style={{ transform: 'rotateY(-10deg) rotateX(5deg)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}