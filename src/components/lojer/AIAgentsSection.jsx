import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBackground from './SectionBackground';
import FloatingShapes from './FloatingShapes';

gsap.registerPlugin(ScrollTrigger);

export default function AIAgentsSection({ aiAgentsImg }) {
  const textRef = useRef(null);

  useEffect(() => {
    const paragraphs = textRef.current.querySelectorAll('p, div');
    gsap.fromTo(paragraphs,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, stagger: 0.15, duration: 0.8,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%"
        }
      }
    );
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      <SectionBackground gradient="cyan" opacity={0.1} />

      {/* Decorative 3D */}
      <div className="absolute top-[20%] left-[10%] opacity-20">
        <FloatingShapes type="icosahedron" color="#00FFD1" className="w-32 h-32" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div ref={textRef} className="order-2 md:order-1">
            <h2 className="font-space text-4xl md:text-5xl font-black mb-8">
              <span className="text-primary neon-text-primary">L</span>OJER AI Agents
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                <span className="text-foreground font-bold">LOJER AI agents</span> will enable fully automated purchasing tailored to each user's preferences.
              </p>
              
              <div className="p-6 rounded-2xl liquid-glass border-l-4 border-l-accent shadow-[0_0_20px_rgba(0,255,209,0.1)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="font-space font-bold text-accent mb-2 text-xl tracking-wide">Smart IoT Integration</p>
                <p className="text-base">
                  Using a combination of AI and IoT devices, our system identifies the best price, quality, and nearby store. Household devices like smart refrigerators can automatically detect low stock and trigger seamless purchase requests through LOJER.
                </p>
              </div>
              
              <p>
                Users can also upload a photo of any product. LOJER's AI will instantly locate it in nearby stores, suggest similar items, or rate its quality based on verified user feedback. Our AI engine scores and compares products across local shops by price, quality, and distance.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 md:order-2 flex justify-center perspective-1000">
            <div className="relative preserve-3d group">
              <div className="absolute inset-0 bg-accent/30 blur-[60px] rounded-full animate-glow-pulse z-0 group-hover:bg-accent/40 transition-colors duration-500" />
              <img
                src={aiAgentsImg}
                alt="LOJER AI Smart Purchasing"
                className="w-72 md:w-[450px] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 border border-border/50 animate-float"
                style={{ transform: 'rotateY(-15deg)' }}
              />
              <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(0,255,209,0.2)] z-20 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}