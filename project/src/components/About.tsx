import React from 'react';
import { BookOpen, Code, Shield, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

export function About() {
  const skills = [
    { icon: <Shield className="h-6 w-6" />, name: 'Cybersecurity' },
    { icon: <Code className="h-6 w-6" />, name: 'Software Development' },
    { icon: <Server className="h-6 w-6" />, name: 'Network Security' },
    { icon: <BookOpen className="h-6 w-6" />, name: 'Continuous Learning' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FadeIn direction="right" delay={0.2}>
              <p className="text-gray-300 text-lg">
                As an undergraduate software engineer with a focus on cybersecurity, I'm passionate about creating secure and efficient solutions. My journey in tech began with a fascination for how things work, which evolved into a deep interest in protecting digital assets and infrastructure.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.4}>
              <p className="text-gray-300 text-lg">
                I believe in the power of continuous learning and staying updated with the latest security trends and technologies. My goal is to contribute to making the digital world a safer place through innovative solutions and robust security practices.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <FadeIn 
                key={index}
                direction="up"
                delay={0.2 * index}
              >
                <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
                  <motion.div 
                    className="text-cyan-500 mb-4"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-white font-semibold">{skill.name}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}