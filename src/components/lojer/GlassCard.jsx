import React from 'react';
import useTilt from '../../hooks/useTilt';
import { motion } from 'framer-motion';

export default function GlassCard({ 
  children, 
  className = '', 
  glowColor = 'primary', // primary, accent, tertiary
  tiltOptions = { max: 15, perspective: 1000, scale: 1.02 },
  delay = 0
}) {
  const tiltRef = useTilt(tiltOptions);

  const glowStyles = {
    primary: "group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(232,54,78,0.15)]",
    accent: "group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(0,255,209,0.15)]",
    tertiary: "group-hover:border-tertiary/40 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]",
  };

  const gradientStyles = {
    primary: "from-primary/5 via-transparent to-transparent",
    accent: "from-accent/5 via-transparent to-transparent",
    tertiary: "from-tertiary/5 via-transparent to-transparent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      ref={tiltRef}
      className={`relative p-6 rounded-2xl liquid-glass transition-all duration-300 group ${glowStyles[glowColor]} ${className} preserve-3d`}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientStyles[glowColor]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative z-10 h-full flex flex-col" style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </motion.div>
  );
}
