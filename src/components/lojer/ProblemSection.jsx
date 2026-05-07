import React from 'react';
import { motion } from 'framer-motion';

const problems = [
  {
    title: 'Price Confusion',
    description: 'Consumers often struggle to determine which store offers the best value.',
  },
  {
    title: 'Market Transparency',
    description: 'There is a lack of transparency between local stores and large retailers about price and quality.',
  },
  {
    title: 'Small Business Struggles',
    description: 'Millions of small and home-based businesses lack access to digital platforms to showcase their products.',
  },
];

export default function ProblemSection({ marketPhotoImg }) {
  return (
    <section id="problem" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-space text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          What is the <span className="text-primary">problem</span> ?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border/40"
              >
                <div className="flex items-start gap-3">
                  <div className="w-1 h-12 bg-accent rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-space font-bold text-lg mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={marketPhotoImg}
              alt="Brazilian market with price tags"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}