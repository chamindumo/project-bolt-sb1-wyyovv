import React from 'react';
import { Shield, Terminal, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { TextReveal } from './animations/TextReveal';
import { FadeIn } from './animations/FadeIn';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-grid-pattern opacity-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <motion.div 
            className="flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Shield className="h-20 w-20 text-cyan-500 animate-pulse" />
          </motion.div>

          <TextReveal delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
              Cybersecurity Enthusiast
            </h1>
          </TextReveal>

          <FadeIn delay={0.5}>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Undergraduate Software Engineer passionate about securing the digital frontier
            </p>
          </FadeIn>

          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Terminal className="h-8 w-8 text-cyan-500" />
            <Code2 className="h-8 w-8 text-blue-500" />
          </motion.div>

          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}