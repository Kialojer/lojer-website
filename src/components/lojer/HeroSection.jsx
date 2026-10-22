import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import GlowButton from './GlowButton';
import useMousePosition from '../../hooks/useMousePosition';

export default function HeroSection({ heroPhoneImg }) {
  const mouse = useMousePosition();
  const phoneRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    // Kinetic typography animation
    if (headlineRef.current) {
      const chars = headlineRef.current.querySelectorAll('.char');
      gsap.fromTo(chars, 
        { opacity: 0, y: 50, rotateX: -90 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0, 
          stagger: 0.05, 
          duration: 1, 
          ease: "back.out(1.7)",
          delay: 0.2
        }
      );
    }
  }, []);

  // Calculate 3D tilt for phone based on mouse
  const phoneTiltStyle = {
    transform: `perspective(1000px) rotateY(${(mouse.x - window.innerWidth/2) * 0.02}deg) rotateX(${-(mouse.y - window.innerHeight/2) * 0.02}deg) translateZ(30px)`,
    transition: 'transform 0.1s ease-out'
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1 text-center md:text-left pt-8 md:pt-0"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_14px_hsl(var(--accent))]" />
              The reward layer for retail
            </div>
            <h1 
              ref={headlineRef}
              className="mt-6 font-space font-black text-5xl md:text-7xl lg:text-[5.6rem] leading-[0.91] tracking-[-0.06em] perspective-1000"
            >
              <div className="flex flex-wrap justify-center md:justify-start">
                {"SHOP".split('').map((char, i) => <span key={`take-${i}`} className="char inline-block text-foreground">{char}</span>)}
                <span className="char inline-block">&nbsp;</span>
                {"THE".split('').map((char, i) => <span key={`photos-${i}`} className="char inline-block text-foreground">{char}</span>)}
              </div>
              <div className="flex flex-wrap justify-center md:justify-start mt-2">
                {"WORLD".split('').map((char, i) => <span key={`earn-${i}`} className="char inline-block text-foreground">{char}</span>)}
                <span className="char inline-block">&nbsp;</span>
                {"BACK.".split('').map((char, i) => <span key={`crypto-${i}`} className="char inline-block text-gradient-accent pb-2">{char}</span>)}
              </div>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-7 text-muted-foreground text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              Turn the everyday products you discover into useful retail intelligence—and earn <span className="text-foreground font-semibold">LOJ</span> for contributing.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <GlowButton href="#solution" variant="solid">
                Get Started
              </GlowButton>
              <GlowButton href="mailto:info@lojer.app" variant="glass">
                Invest Now
              </GlowButton>
            </motion.div>
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-x-7 gap-y-3 text-sm text-muted-foreground">
              <span><b className="text-foreground">TON-native</b> rewards</span>
              <span><b className="text-foreground">AI-verified</b> contributions</span>
            </div>
          </motion.div>

          {/* 3D Phone Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative preserve-3d hero-device-wrap" ref={phoneRef} style={phoneTiltStyle}>
              <div className="hero-device-halo" />
              <div className="absolute -right-8 top-[18%] z-20 rounded-2xl border border-white/10 bg-[#15182b]/80 px-4 py-3 shadow-2xl backdrop-blur-xl animate-float">
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Today’s reward</p>
                <p className="mt-1 font-space text-lg font-bold text-accent">+ 42 LOJ</p>
              </div>
              <img
                src={heroPhoneImg}
                alt="LOJER App on smartphone"
                className="relative z-10 w-64 md:w-[350px] drop-shadow-[0_28px_70px_rgba(0,0,0,0.58)] animate-float"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
      
      <p className="absolute bottom-7 left-6 md:left-10 z-10 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">LOJER / 2026</p>
    </section>
  );
}
