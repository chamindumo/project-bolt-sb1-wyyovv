import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

export function Experience() {
  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Conducted security assessments and vulnerability scanning. Assisted in implementing security protocols and best practices."
    },
    {
      title: "Software Development Intern",
      company: "Digital Innovations Lab",
      period: "2022 - 2023",
      description: "Developed and maintained web applications. Collaborated with senior developers on security-focused projects."
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <FadeIn 
              key={index}
              direction="left"
              delay={0.2 * index}
            >
              <div className="relative pl-8 border-l-2 border-cyan-500">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Briefcase className="absolute -left-4 text-cyan-500 bg-black p-1 w-8 h-8" />
                </motion.div>
                <motion.div 
                  className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-cyan-500 mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}