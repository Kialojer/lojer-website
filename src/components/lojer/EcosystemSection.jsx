import React from 'react';
import { motion } from 'framer-motion';

const ecosystemItems = [
{ label: 'LOJ TOKEN', x: '30%', y: '12%' },
{ label: 'AI AGENTS', x: '65%', y: '12%' },
{ label: 'BLOCKCHAIN', x: '15%', y: '45%' },
{ label: 'MARKET PLACE', x: '75%', y: '45%' },
{ label: 'WALLET & NFTs', x: '25%', y: '78%' },
{ label: 'SUBSCRIBE SYSTEM', x: '65%', y: '78%' }];


export default function EcosystemSection({ ecosystemBgImg }) {
  return (
    <section id="tech-vision" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ecosystemBgImg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 w-full px-6">
        {/* Center logo */}
        <div className="relative h-[400px] md:h-[500px] w-full opacity-100">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            
            <h2 className="font-space font-black text-3xl md:text-5xl">
              <span className="text-primary"></span>
              <span className="text-accent"></span>
              <span className="text-foreground text-left"></span>
            </h2>
          </motion.div>

          {/* Ecosystem items */}
          {ecosystemItems.map((item, i) =>
          <motion.div
            key={item.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            className="absolute font-space font-bold text-sm md:text-base tracking-widest text-muted-foreground hover:text-foreground transition-colors cursor-default"
            style={{ left: item.x, top: item.y, transform: 'translate(-50%, -50%)' }}>
            
              {item.label}
            </motion.div>
          )}

          {/* Connecting lines (decorative) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {ecosystemItems.map((item, i) =>
            <line
              key={i}
              x1="50"
              y1="50"
              x2={parseFloat(item.x)}
              y2={parseFloat(item.y)}
              stroke="hsl(var(--border))"
              strokeWidth="0.15"
              strokeDasharray="1 1" />

            )}
          </svg>
        </div>
      </div>
    </section>);

}