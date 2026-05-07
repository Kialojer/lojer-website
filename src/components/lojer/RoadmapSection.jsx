import React from 'react';
import { motion } from 'framer-motion';

const roadmapItems = [
  {
    period: 'Year 1',
    quarter: 'Q1 & Q2',
    description: 'Finalization of the design and development of the initial versions of the application and LOJER token',
  },
  {
    period: 'Year 1',
    quarter: 'Q3',
    description: 'Execution of initial marketing campaigns to establish presence on social media platforms and Launch of the main application version and wallet within São Paulo',
  },
  {
    period: 'Year 1',
    quarter: 'Q4',
    description: 'Launch of the LOJER token, initiating airdrop and ICO, plus listing on exchanges',
  },
  {
    period: 'Year 2',
    quarter: 'Q1',
    description: 'Expansion of application functionality to enable online shopping, with improvements based on user feedback and develop AI agents',
  },
  {
    period: 'Year 2',
    quarter: 'Q2',
    description: 'Introduction of staking features',
  },
  {
    period: 'Year 2',
    quarter: 'Q3',
    description: 'Establishing strategic partnerships with small and large retailers',
  },
  {
    period: 'Year 2',
    quarter: 'Q4',
    description: 'Implementation of targeted marketing campaigns to grow user base and begin developing AI agents',
  },
];

export default function RoadmapSection({ techBgImg }) {
  return (
    <section id="roadmap" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={techBgImg} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-space text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">R</span>oad map
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            This roadmap outlines the development and planning phases for the LOJER application over the first two years. The goal is to create an efficient and comprehensive platform for users, expand the market, and enhance the application's capabilities through various stages of design, development, marketing, and strategic partnerships.
          </p>
        </motion.div>

        {/* Year 1 */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {roadmapItems.slice(0, 3).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/30 transition-all"
              >
                <div className="text-center mb-4">
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                  <h3 className="font-space font-bold text-lg text-primary">( {item.quarter} )</h3>
                </div>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Year 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {roadmapItems.slice(3).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/30 transition-all"
            >
              <div className="text-center mb-4">
                <span className="text-sm text-muted-foreground">{item.period}</span>
                <h3 className="font-space font-bold text-lg text-primary">( {item.quarter} )</h3>
              </div>
              <p className="text-muted-foreground text-sm text-center leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}