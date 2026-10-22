import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ 
  value, 
  duration = 2, 
  prefix = '', 
  suffix = '',
  className = ''
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Extract the numeric part and non-numeric part from the value
  // Example: "59 B$" -> number = 59, textSuffix = " B$"
  const numericMatch = value.match(/[\d.]+/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const isFloat = value.includes('.');
  
  const textSuffix = numericMatch ? value.replace(numericMatch[0], '') : '';

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = targetNumber * easeOut;
        
        setCount(currentCount);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(targetNumber);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, targetNumber, duration]);

  const displayValue = isFloat ? count.toFixed(1) : Math.floor(count);

  return (
    <div ref={ref} className={className}>
      {prefix}{displayValue}{textSuffix}{suffix}
    </div>
  );
}
