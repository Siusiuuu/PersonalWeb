"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, ArrowDown } from "lucide-react";
import { staggerContainer, heroTextReveal, fadeInUp } from "@/components/animations/motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-300/20 dark:bg-slate-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main heading with name */}
          <motion.div variants={heroTextReveal} className="space-y-4">
            <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
              Hannah Liu
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
              LIU Siu Man
            </p>
          </motion.div>

          {/* Professional headline */}
          <motion.div
            variants={fadeInUp}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium">
              Computer Science Student | AI & Web Developer
            </p>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="max-w-xl mx-auto text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
          >
            Focused on Conversational AI, Full-Stack Development, and building
            empathetic digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.a
              href="mailto:siumanliu029@gmail.com"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              Get in Touch
            </motion.a>
            <motion.a
              href="https://github.com/Siusiuuu"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-full font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              View GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
