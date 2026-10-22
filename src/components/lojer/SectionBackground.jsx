import React from 'react';

export default function SectionBackground({ 
  gradient = 'primary', // primary, cyan, indigo, mixed
  opacity = 0.15,
  withGrid = false 
}) {
  
  const getGradient = () => {
    switch(gradient) {
      case 'primary': return 'from-primary/20 via-transparent to-transparent';
      case 'cyan': return 'from-accent/20 via-transparent to-transparent';
      case 'indigo': return 'from-tertiary/20 via-transparent to-transparent';
      case 'mixed': return 'from-primary/20 via-accent/10 to-tertiary/20';
      default: return 'from-background via-card/50 to-background';
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className={`absolute inset-0 bg-gradient-to-b ${getGradient()} opacity-${Math.round(opacity * 100)}`} />
      
      {/* Animated Orbs */}
      {gradient === 'mixed' && (
        <>
          <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-tertiary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[40%] right-[30%] w-64 h-64 bg-accent/15 rounded-full blur-[80px] animate-float" style={{ animationDelay: '4s' }} />
        </>
      )}

      {/* Optional Grid Overlay */}
      {withGrid && (
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
      )}
    </div>
  );
}
