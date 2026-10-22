import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import SectionBackground from './SectionBackground';

gsap.registerPlugin(ScrollTrigger);

// Updated colors to match new futuristic palette
const tokenData = [
  { name: 'Reward Pools', value: 70, color: '#7C3AED' }, // Tertiary (Indigo)
  { name: 'Investors', value: 6, color: '#E8364E' }, // Primary (Coral)
  { name: 'Staking Pools', value: 5.5, color: '#00FFD1' }, // Accent (Cyan)
  { name: 'Founders', value: 5, color: '#4F46E5' }, // Deep Indigo
  { name: 'Team Members', value: 5, color: '#10B981' }, // Emerald
  { name: 'Team Expenses', value: 5, color: '#3B82F6' }, // Blue
  { name: 'Emergency Reserves', value: 1.5, color: '#F59E0B' }, // Amber
  { name: 'Advisers', value: 1.5, color: '#EC4899' }, // Pink
  { name: 'Delivery Team', value: 0.5, color: '#8B5CF6' }, // Violet
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="liquid-glass border border-border/50 rounded-xl px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <p className="text-muted-foreground font-medium text-sm mb-1">{payload[0].name}</p>
        <p className="text-foreground font-black text-xl" style={{ color: payload[0].payload.color, textShadow: `0 0 10px ${payload[0].payload.color}80` }}>
          {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export default function TokenomicsSection() {
  const chartRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(chartRef.current,
      { opacity: 0, scale: 0.8, rotateX: 45 },
      {
        opacity: 1, scale: 1, rotateX: 0, duration: 1.5, ease: "power3.out",
        scrollTrigger: {
          trigger: chartRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <section id="tokenomics" className="relative py-32 overflow-hidden">
      <SectionBackground gradient="indigo" opacity={0.15} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient-primary">T</span>okenomics
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            LOJ Token distribution designed for sustainable growth and community rewards.
          </p>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] perspective-1000" ref={chartRef}>
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-tertiary/20 blur-[100px] rounded-full z-0" />
          
          <div className="relative z-10 w-full h-full preserve-3d">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tokenData}
                  cx="50%"
                  cy="50%"
                  innerRadius="45%"
                  outerRadius="75%"
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                  label={({ name, value, cx, cy, midAngle, outerRadius, color }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = outerRadius + 40;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    return (
                      <text
                        x={x}
                        y={y}
                        fill="#F0F0F5"
                        textAnchor={x > cx ? 'start' : 'end'}
                        dominantBaseline="central"
                        fontSize={12}
                        fontWeight="600"
                        fontFamily="Space Grotesk"
                        className="drop-shadow-md"
                      >
                        {value}% <tspan fill={color} style={{ textShadow: `0 0 8px ${color}` }}>{name}</tspan>
                      </text>
                    );
                  }}
                >
                  {tokenData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      style={{ filter: `drop-shadow(0 0 8px ${entry.color}40)` }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}