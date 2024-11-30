import { motion } from 'framer-motion';
import React from 'react';

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function TextReveal({ children, delay = 0, className = '' }: TextRevealProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.21, 1.02, 0.73, 0.99],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}