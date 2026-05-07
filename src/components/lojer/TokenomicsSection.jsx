import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const tokenData = [
  { name: 'Reward Pools', value: 70, color: '#7C3AED' },
  { name: 'Investors', value: 6, color: '#DC2626' },
  { name: 'Staking Pools', value: 5.5, color: '#F97316' },
  { name: 'Founders', value: 5, color: '#D97706' },
  { name: 'Team Members', value: 5, color: '#92400E' },
  { name: 'Team Expenses', value: 5, color: '#78350F' },
  { name: 'Emergency Reserves', value: 1.5, color: '#65A30D' },
  { name: 'Advisers', value: 1.5, color: '#854D0E' },
  { name: 'Delivery Team', value: 0.5, color: '#A16207' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-xl">
        <p className="text-foreground font-medium text-sm">{payload[0].name}</p>
        <p className="text-accent font-bold">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      {/* Subtle blue glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-space text-3xl md:text-5xl font-bold mb-4 text-center"
        >
          <span className="text-primary">T</span>okenomics
        </motion.h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          LOJ Token distribution designed for sustainable growth and community rewards
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-[400px] md:h-[500px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={tokenData}
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="70%"
                paddingAngle={2}
                dataKey="value"
                label={({ name, value, cx, cy, midAngle, outerRadius }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = outerRadius + 30;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="hsl(0, 0%, 65%)"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                      fontSize={11}
                      fontFamily="Space Grotesk"
                    >
                      {value} <tspan fill="hsl(39, 90%, 55%)">LOJ</tspan> {name}
                    </text>
                  );
                }}
              >
                {tokenData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}