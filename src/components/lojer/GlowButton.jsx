import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function GlowButton({ 
  children, 
  href, 
  variant = 'solid', 
  className = '', 
  onClick 
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Magnetic effect calculation (subtle)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const distanceX = x - centerX;
    const distanceY = y - centerY;
    
    setPosition({ x: distanceX * 0.2, y: distanceY * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = "relative inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group";
  
  const variants = {
    solid: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(232,54,78,0.4)] hover:shadow-[0_0_30px_rgba(232,54,78,0.6)]",
    outline: "border border-primary/50 text-foreground hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(232,54,78,0.3)] bg-transparent",
    glass: "liquid-glass text-foreground hover:text-primary hover:border-primary/50"
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={buttonRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Internal hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] ease-in-out" style={{ transitionDuration: '1s' }} />
    </Component>
  );
}
