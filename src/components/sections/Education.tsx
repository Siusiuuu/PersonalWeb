"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/animations/motion";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 sm:py-32 bg-white dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider"
          >
            Academic Background
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50"
          >
            Education
          </motion.h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="relative bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700"
          >
            {/* Icon */}
            <div className="absolute -top-4 left-6 sm:left-8">
              <div className="p-3 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="pt-4 sm:pt-2">
              {/* Degree */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">
                Bachelor of Computer Science (Hons)
              </h3>

              {/* Institution */}
              <p className="mt-2 text-lg font-medium text-slate-700 dark:text-slate-300">
                The Hong Kong Polytechnic University
              </p>

              {/* Meta info */}
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  <span>Sep 2023 - Present</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={16} />
                  <span>Hong Kong</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Currently Enrolled
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
