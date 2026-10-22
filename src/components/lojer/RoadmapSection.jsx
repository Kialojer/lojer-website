import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBackground from './SectionBackground';
import GlassCard from './GlassCard';

gsap.registerPlugin(ScrollTrigger);

const roadmapItems = [
  { period: 'Year 1', quarter: 'Q1 & Q2', desc: 'Finalization of the design and development of the initial versions of the application and LOJER token', status: 'done' },
  { period: 'Year 1', quarter: 'Q3', desc: 'Execution of initial marketing campaigns to establish presence on social media platforms and Launch of the main application version and wallet within São Paulo', status: 'current' },
  { period: 'Year 1', quarter: 'Q4', desc: 'Launch of the LOJER token, initiating airdrop and ICO, plus listing on exchanges', status: 'upcoming' },
  { period: 'Year 2', quarter: 'Q1', desc: 'Expansion of application functionality to enable online shopping, with improvements based on user feedback and develop AI agents', status: 'upcoming' },
  { period: 'Year 2', quarter: 'Q2', desc: 'Introduction of staking features', status: 'upcoming' },
  { period: 'Year 2', quarter: 'Q3', desc: 'Establishing strategic partnerships with small and large retailers', status: 'upcoming' },
  { period: 'Year 2', quarter: 'Q4', desc: 'Implementation of targeted marketing campaigns to grow user base and begin developing AI agents', status: 'upcoming' },
];

export default function RoadmapSection() {
  const lineRef = useRef(null);

  useEffect(() => {
    // Animate the progress line drawing down
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: "#roadmap-container",
          start: "top 50%",
          end: "bottom 80%",
          scrub: 1
        }
      }
    );
  }, []);

  const getStatusColor = (status) => {
    if (status === 'done') return 'tertiary';
    if (status === 'current') return 'accent';
    return 'primary';
  };

  return (
    <section id="roadmap" className="relative py-32 overflow-hidden">
      <SectionBackground gradient="primary" opacity={0.1} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-space text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient-primary">R</span>oad map
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            The development and planning phases for the LOJER platform over the first two years.
          </p>
        </div>

        <div id="roadmap-container" className="relative max-w-4xl mx-auto pb-10">
          {/* Vertical connecting line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 rounded-full overflow-hidden">
            <div ref={lineRef} className="w-full h-full bg-gradient-to-b from-tertiary via-accent to-primary" />
          </div>

          <div className="space-y-12">
            {roadmapItems.map((item, i) => {
              const isEven = i % 2 === 0;
              const alignClass = isEven ? "md:pr-12 md:text-right md:ml-auto md:mr-[50%]" : "md:pl-12 md:mr-auto md:ml-[50%]";
              const glowColor = getStatusColor(item.status);

              return (
                <div key={i} className={`relative flex items-center w-full md:w-1/2 ${alignClass}`}>
                  
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-[calc(${isEven ? '100%' : '0%'})] w-5 h-5 rounded-full border-4 border-background shadow-[0_0_15px_rgba(255,255,255,0.2)] -translate-x-1/2 z-10 ${
                    item.status === 'done' ? 'bg-tertiary shadow-[0_0_15px_#7C3AED]' :
                    item.status === 'current' ? 'bg-accent shadow-[0_0_15px_#00FFD1] animate-glow-pulse' :
                    'bg-primary border-primary/30'
                  }`} />

                  {/* Card Content */}
                  <div className="w-full pl-12 md:pl-0">
                    <GlassCard glowColor={glowColor} className="!p-6 group relative">
                      {/* Active indicator */}
                      {item.status === 'current' && (
                        <div className="absolute -top-px -left-px -right-px h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-t-2xl opacity-50" />
                      )}
                      
                      <div className="mb-3 flex items-center justify-between md:flex-col md:items-start flex-wrap gap-2">
                        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                          item.status === 'done' ? 'border-tertiary text-tertiary bg-tertiary/10' :
                          item.status === 'current' ? 'border-accent text-accent bg-accent/10' :
                          'border-primary text-primary bg-primary/10'
                        }`}>
                          {item.period}
                        </span>
                        <h3 className="font-space font-black text-xl text-foreground">
                          {item.quarter}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </GlassCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}