import { useRef, useEffect } from 'react';

export default function useTilt(options = { max: 15, perspective: 1000, scale: 1.05 }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -options.max;
      const rotateY = ((x - centerX) / centerX) * options.max;
      
      element.style.transform = `perspective(${options.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${options.scale})`;
    };

    const handleMouseLeave = () => {
      element.style.transform = `perspective(${options.perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    // Smooth transition when returning to base state
    element.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [options.max, options.perspective, options.scale]);

  return ref;
}
