import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Blocks, Store, Bot, Cpu, Wallet, ShieldCheck, LineChart } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'A transparent, reward-driven platform powered by real-time data, starting in Brazil and expanding globally.',
  },
  {
    icon: Blocks,
    title: 'Blockchain Ecosystem',
    description: 'Connecting retailers via shared digital ecosystems, empowering them with dedicated tokens and NFTs for true ownership.',
  },
  {
    icon: Store,
    title: 'Community Marketplace',
    description: 'Equal visibility for businesses of all sizes, powered by user-generated content across all categories.',
  },
  {
    icon: Bot,
    title: 'Intelligent AI Agents',
    description: 'Smart agents that detect fake content, identify best quality, and automate personalized purchasing decisions.',
  },
  {
    icon: Cpu,
    title: 'Advanced Tech',
    description: 'Secure, fraud-proof architecture powered by smart AI and gas-free transactions on the TON network.',
  },
  {
    icon: Wallet,
    title: 'LOJER Smart Wallet',
    description: 'Non-custodial W5 standard wallet on TON offering fast, low-cost, and flexible crypto interactions.',
  },
  {
    icon: ShieldCheck,
    title: 'C.N.N Verification',
    description: 'Custom AI verifying GPS and real-time timestamps on all photos to guarantee a 100% trusted ecosystem.',
  },
  {
    icon: LineChart,
    title: 'AI Price Analysis',
    description: 'Real-time scans to find the cheapest nearby stores, flag inconsistencies, and offer smart suggestions.',
  },
];

export default function SolutionSection({ techBgImg }) {
  return (
    <section id="solution" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        {/* If you have the image, it will show. Otherwise, the gradient covers it nicely */}
        {techBgImg && <img src={techBgImg} alt="" className="w-full h-full object-cover opacity-10" />}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space text-3xl md:text-5xl font-bold mb-6">
            Technology & <span className="text-primary">Vision</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A revolutionary platform merging e-commerce, cryptocurrency, and AI-powered price comparison in one seamless experience.
          </p>
        </motion.div>

        {/* 4x2 Grid for the features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-card/40 backdrop-blur-md border border-border/40 hover:border-primary/40 transition-all group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-space font-bold text-lg mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}