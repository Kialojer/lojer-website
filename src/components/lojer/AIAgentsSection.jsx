import React from 'react';
import { motion } from 'framer-motion';

export default function AIAgentsSection({ aiAgentsImg }) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-space text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">L</span>OJER AI Agents
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                <span className="text-primary font-semibold">L</span>OJER AI agents will enable fully automated purchasing tailored to each user's preferences.
              </p>
              <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
                <p className="font-medium text-foreground mb-2">Smart IoT Integration</p>
                <p>
                  Using a combination of AI and IoT devices, our system identifies the best price, quality, and nearby store. Household devices like smart refrigerators can automatically detect low stock and trigger seamless purchase requests through LOJER.
                </p>
              </div>
              <p>
                Users can also upload a photo of any product. LOJER's AI will instantly locate it in nearby stores, suggest similar items, or rate its quality based on verified user feedback. Our AI engine scores and compares products across local shops by price, quality, and distance.
              </p>
            </div>

          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={aiAgentsImg}
              alt="LOJER AI Smart Purchasing"
              className="w-72 md:w-96 rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}