import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '59 B$', description: 'In 2024, e-commerce in Brazil reached a turnover of 59 billion$' },
  { value: '10.5%', description: 'representing a growth compared to the previous year' },
  { value: '91 M', description: '91.3 million online buyers' },
  { value: '415 M', description: 'The sector registered 414.9 million orders' },
];

export default function MarketSection({ christStatueImg }) {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
      {/* Subtle teal glow bottom right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-space text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          Market Potential
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-space font-black text-3xl md:text-5xl text-primary mb-3">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-xs md:text-sm">{stat.description}</p>
              <div className="mt-3 mx-auto h-0.5 w-16 bg-primary/40 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Christ statue and text */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              Brazil's e-commerce market has seen remarkable growth, reaching 59 billion USD in 2024.
              Pix is now the most used payment method, accounting for 40% of transactions.
              The online food delivery sector is booming as well, with USD 12.8 billion in revenue and projections to hit USD 22.4 billion by 2030.
            </p>
            <h3 className="font-space font-bold text-primary text-lg">Meanwhile</h3>
            <p className="text-muted-foreground leading-relaxed">
              In 2024, Brazil's crypto market hit record levels, with R$115.7 billion traded in September alone and R$247.8 billion from January to September—surpassing the market value of Vale.
              Tether (USDT) dominated trading, and over 66% of transactions were made by companies on exchanges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With nearly <span className="text-primary font-semibold">10 million</span> users, Brazil is becoming a major hub for crypto. LOJER is poised to leverage this momentum by offering modern crypto payment solutions and empowering local businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={christStatueImg}
              alt="Christ the Redeemer"
              className="w-48 md:w-64 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}