import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection({ heroPhoneImg, techBgImg }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={techBgImg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Phone image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end order-2 md:order-1"
          >
            <img
              src={heroPhoneImg}
              alt="LOJER App on smartphone"
              className="w-64 md:w-80 drop-shadow-2xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <h1 className="font-space font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
              <span className="text-foreground">TAKE PHOTOS</span>
              <br />
              <span className="text-foreground">EARN </span>
              <span className="text-accent">CRYPTO</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Take photos of products, upload them, and earn LOJ tokens. The future of shopping meets cryptocurrency.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#solution"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
              >
                Get Started
              </a>
              <a
                href="mailto:info@lojer.app"
                className="px-8 py-3 border border-border text-foreground rounded-full font-medium hover:border-primary hover:text-primary transition-all"
              >
                Invest Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}