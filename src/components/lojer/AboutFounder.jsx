import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, BrainCircuit, Network, Database } from 'lucide-react';

export default function AboutFounder() {
  return (
    <section id="about-founder" className="relative py-24 overflow-hidden border-t border-border/30">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* بخش متن معرفی */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Terminal size={16} />
              <span>Agentic AI Developer</span>
            </div>
            
            <h2 className="font-space text-3xl md:text-5xl font-bold mb-6 text-foreground">
              The Mind Behind <span className="text-primary">LOJER</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground/90 font-medium">
                I build production-ready Agentic AI systems that connect Large Language Models (LLMs) to real-world execution layers.
              </p>
              <p>
                My focus is on designing scalable multi-agent architectures where autonomous agents collaborate, route decisions, and execute complex workflows across APIs, data systems, and backend services. I don’t just work with LLMs — I engineer the systems around them.
              </p>
              <p>
                With a background in control systems and quantitative finance, I approach AI as an engineering discipline — focused on system reliability, feedback loops, and real-world constraints. I am currently open to AI Systems Engineer roles to build intelligent systems that move beyond prototypes into production.
              </p>
            </div>
          </motion.div>

          {/* بخش کارت‌های تخصص */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/30 transition-colors">
                <Network className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-space font-bold text-foreground mb-2">Multi-Agent Systems</h3>
                <p className="text-sm text-muted-foreground">Architecting MAS with AutoGen and CrewAI for hierarchical task delegation and intelligent routing.</p>
              </div>

              <div className="p-5 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/30 transition-colors">
                <BrainCircuit className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-space font-bold text-foreground mb-2">MCP & HITL</h3>
                <p className="text-sm text-muted-foreground">Implementing Model Context Protocol and Human-in-the-Loop workflows for safe, controlled execution.</p>
              </div>

              <div className="p-5 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/30 transition-colors">
                <Database className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="font-space font-bold text-foreground mb-2">Stateful RAG</h3>
                <p className="text-sm text-muted-foreground">Building RAG systems grounded in private structured data with persistent memory and contextual awareness.</p>
              </div>

              <div className="p-5 rounded-2xl bg-card/60 border border-border/50 hover:border-primary/30 transition-colors">
                <Terminal className="w-8 h-8 text-green-500 mb-3" />
                <h3 className="font-space font-bold text-foreground mb-2">Backend Architecture</h3>
                <p className="text-sm text-muted-foreground">Python async systems, FastAPI, REST APIs, tool calling, and cloud deployment integration.</p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}