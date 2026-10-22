import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBackground from './SectionBackground';
import GlassCard from './GlassCard';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  { title: 'Price Confusion', desc: 'Consumers often struggle to determine which store offers the best value.' },
  { title: 'Market Transparency', desc: 'There is a lack of transparency between local stores and large retailers.' },
  { title: 'Small Business Struggles', desc: 'Millions of small businesses lack access to digital platforms.' },
];

export default function ProblemSection({ marketPhotoImg }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Parallax image effect
    gsap.to(imageRef.current, {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    gsap.fromTo('.problem-card',
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, stagger: 0.2, duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%"
        }
      }
    );
  }, []);

  return (
    <section id="problem" ref={sectionRef} className="relative py-32 overflow-hidden">
      <SectionBackground gradient="primary" opacity={0.1} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="font-space text-4xl md:text-5xl font-black mb-20 text-center">
          What is the <span className="text-destructive neon-text-primary">problem</span>?
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {problems.map((problem, i) => (
              <div key={problem.title} className="problem-card">
                <GlassCard glowColor="primary" className="!p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-12 bg-destructive rounded-full flex-shrink-0 mt-1 shadow-[0_0_10px_rgba(232,54,78,0.5)]" />
                    <div>
                      <h3 className="font-space font-bold text-xl mb-2 text-foreground">{problem.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{problem.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden liquid-glass p-2 perspective-1000">
            <div className="absolute inset-0 border border-primary/20 rounded-3xl z-20 pointer-events-none" />
            {/* Parallax Image Container */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative preserve-3d">
              <img
                ref={imageRef}
                src={marketPhotoImg}
                alt="Brazilian market"
                className="absolute top-[-50px] left-0 w-full h-[calc(100%+100px)] object-cover scale-110"
              />
              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/30 blur-[50px] z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}