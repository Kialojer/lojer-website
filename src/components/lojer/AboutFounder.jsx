import React, { useEffect, useRef } from 'react';
import { Terminal, BrainCircuit, Network, Database } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBackground from './SectionBackground';
import GlassCard from './GlassCard';

gsap.registerPlugin(ScrollTrigger);

export default function AboutFounder() {
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.founder-card',
      { opacity: 0, y: 50, rotateX: 20 },
      {
        opacity: 1, y: 0, rotateX: 0, stagger: 0.1, duration: 0.8,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section id="about-founder" className="relative py-32 overflow-hidden border-t border-border/20">
      <SectionBackground gradient="mixed" opacity={0.1} withGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border border-tertiary/30 shadow-[0_0_15px_rgba(124,58,237,0.2)] mb-8">
              <Terminal size={16} className="text-tertiary" />
              <span className="text-foreground text-sm font-bold tracking-wide">Agentic AI Developer</span>
            </div>
            
            <h2 className="font-space text-4xl md:text-5xl font-black mb-8 text-foreground">
              The Mind Behind <span className="text-gradient-primary">LOJER</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p className="text-foreground font-medium border-l-2 border-tertiary pl-4">
                I build production-ready Agentic AI systems that connect Large Language Models (LLMs) to real-world execution layers.
              </p>
              <p>
                My focus is on designing scalable multi-agent architectures where autonomous agents collaborate, route decisions, and execute complex workflows across APIs, data systems, and backend services.
              </p>
              <p>
                With a background in control systems and quantitative finance, I approach AI as an engineering discipline — focused on system reliability, feedback loops, and real-world constraints.
              </p>
            </div>
          </div>

          {/* Expertise Cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6 perspective-1000">
            
            <div className="founder-card preserve-3d">
              <GlassCard glowColor="tertiary" className="h-full">
                <Network className="w-10 h-10 text-tertiary mb-4 drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                <h3 className="font-space font-bold text-foreground text-lg mb-2">Multi-Agent Systems</h3>
                <p className="text-sm text-muted-foreground">Architecting MAS with AutoGen and CrewAI for hierarchical task delegation and intelligent routing.</p>
              </GlassCard>
            </div>

            <div className="founder-card preserve-3d">
              <GlassCard glowColor="accent" className="h-full">
                <BrainCircuit className="w-10 h-10 text-accent mb-4 drop-shadow-[0_0_10px_rgba(0,255,209,0.5)]" />
                <h3 className="font-space font-bold text-foreground text-lg mb-2">MCP & HITL</h3>
                <p className="text-sm text-muted-foreground">Implementing Model Context Protocol and Human-in-the-Loop workflows for safe, controlled execution.</p>
              </GlassCard>
            </div>

            <div className="founder-card preserve-3d">
              <GlassCard glowColor="primary" className="h-full">
                <Database className="w-10 h-10 text-primary mb-4 drop-shadow-[0_0_10px_rgba(232,54,78,0.5)]" />
                <h3 className="font-space font-bold text-foreground text-lg mb-2">Stateful RAG</h3>
                <p className="text-sm text-muted-foreground">Building RAG systems grounded in private structured data with persistent memory and contextual awareness.</p>
              </GlassCard>
            </div>

            <div className="founder-card preserve-3d">
              <GlassCard glowColor="accent" className="h-full">
                <Terminal className="w-10 h-10 text-accent mb-4 drop-shadow-[0_0_10px_rgba(0,255,209,0.5)]" />
                <h3 className="font-space font-bold text-foreground text-lg mb-2">Backend Arch</h3>
                <p className="text-sm text-muted-foreground">Python async systems, FastAPI, REST APIs, tool calling, and cloud deployment integration.</p>
              </GlassCard>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}