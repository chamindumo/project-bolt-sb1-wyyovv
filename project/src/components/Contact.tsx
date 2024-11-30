import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn direction="right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-300">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="flex flex-col space-y-4">
                <motion.a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-500"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail className="h-5 w-5" />
                  your.email@example.com
                </motion.a>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-cyan-500"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-cyan-500"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <form className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <Send className="h-5 w-5" />
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}