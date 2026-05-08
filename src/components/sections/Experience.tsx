"use client";

import { motion } from "framer-motion";
import { Briefcase, Bot, Globe, Smartphone } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/animations/motion";

const experiences = [
  {
    id: 1,
    title: "LLM Intern",
    company: "EARNEST Research Laboratory",
    period: "Dec 2025 - Present",
    icon: Bot,
    achievements: [
      "Developed a real-time conversational chatbot leveraging LLM tool-use for dynamic information retrieval.",
      "Crafted nuanced interaction behaviors and evaluated fine-tuned, personalized chatbots for different cultural endpoints.",
      "Built benchmarks and evaluation pipelines to assess tool-use, Cantonese generation quality, and cost-performance.",
    ],
  },
  {
    id: 2,
    title: "Summer Intern (Web Dev & BA)",
    company: "Electrical and Mechanical Services Department",
    period: "Jul 2025 - Aug 2025",
    icon: Globe,
    achievements: [
      "Participated in the full product life cycle, improving system stability for 'eSurvey' by diagnosing multiple bugs.",
      "Designed and implemented three new system pages for 'SignatureHub' to enhance user workflows.",
      "Actively engaged with RAG (Retrieval Augmented Generation) and AI chatbot technologies.",
    ],
  },
  {
    id: 3,
    title: "Summer Intern (App/Web Dev)",
    company: "Candy Service Limited",
    period: "May 2025 - Jul 2025",
    icon: Smartphone,
    achievements: [
      "Developed web pages using PHP, JavaScript, and MySQL, including the login and main dashboard for the Hong Kong Ice Hockey Association.",
      "Applied the Frappe framework for modern web architecture and optimized performance through system testing.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider"
          >
            Work History
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50"
          >
            Experience
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
              >
                <motion.div
                  variants={fadeInUp}
                  className="relative pl-16 sm:pl-24"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-2 top-0">
                    <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-900 rounded-full border-2 border-blue-600 shadow-sm">
                      <exp.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-slate-900 rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-50">
                          {exp.title}
                        </h3>
                        <p className="text-base font-medium text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-slate-600 dark:text-slate-400"
                        >
                          <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                          <span className="text-sm sm:text-base leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
