"use client";

import { motion } from "framer-motion";
import {
  Languages,
  Brain,
  Code2,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/components/animations/motion";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    icon: Languages,
    skills: [
      { name: "Cantonese", level: "Native", color: "green" },
      { name: "English", level: "Proficient", color: "green" },
      { name: "Mandarin", level: "Proficient", color: "green" },
      { name: "Japanese", level: "Basic", color: "amber" },
    ],
  },
  {
    id: "ai-data",
    name: "AI & Data",
    icon: Brain,
    accent: true,
    skills: [
      { name: "LLM Deployment & Prompt Engineering", level: "Advanced", color: "blue" },
      { name: "Python", level: "Advanced", color: "blue" },
      { name: "Basic R", level: "Basic", color: "amber" },
    ],
  },
  {
    id: "web-software",
    name: "Web & Software",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: "Advanced", color: "blue" },
      { name: "React", level: "Advanced", color: "blue" },
      { name: "PHP", level: "Proficient", color: "green" },
      { name: "Flask", level: "Proficient", color: "green" },
      { name: "Java", level: "Proficient", color: "green" },
      { name: "C/C++", level: "Proficient", color: "green" },
      { name: "SQL", level: "Proficient", color: "green" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Systems",
    icon: Wrench,
    skills: [
      { name: "Linux/Unix", level: "Proficient", color: "green" },
      { name: "Git", level: "Proficient", color: "green" },
      { name: "Oracle Software", level: "Proficient", color: "green" },
      { name: "Putty", level: "Proficient", color: "green" },
      { name: "Batch File Scripting", level: "Proficient", color: "green" },
      { name: "Command Centre Monitoring", level: "Proficient", color: "green" },
    ],
  },
];

const levelColors = {
  green: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800",
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  amber: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800",
};

interface SkillPillProps {
  name: string;
  level: string;
  color: "green" | "blue" | "amber";
  delay?: number;
}

function SkillPill({ name, level, color, delay = 0 }: SkillPillProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay }}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full border font-medium text-sm cursor-default",
        levelColors[color]
      )}
    >
      <span>{name}</span>
      <span className="text-xs opacity-70">• {level}</span>
    </motion.div>
  );
}

interface SkillCategoryProps {
  category: typeof skillCategories[0];
  index: number;
}

function SkillCategory({ category, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className={cn(
        "p-6 sm:p-8 rounded-2xl border transition-all duration-300",
        category.accent
          ? "bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700"
      )}
    >
      {/* Category Header */}
      <motion.div
        variants={fadeInUp}
        className="flex items-center gap-3 mb-6"
      >
        <div
          className={cn(
            "p-2.5 rounded-xl",
            category.accent
              ? "bg-blue-600 text-white"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
          )}
        >
          <category.icon className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
          {category.name}
        </h3>
      </motion.div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, idx) => (
          <SkillPill
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={skill.color as "green" | "blue" | "amber"}
            delay={idx * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-32 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider"
          >
            Technical Expertise
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50"
          >
            Skills
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-400"
          >
            A diverse toolkit spanning AI technologies, web development, and system operations
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Proficiency Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-4 text-sm text-slate-500 dark:text-slate-400"
        >
          <span>Proficiency:</span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span>Native/Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            <span>Proficient</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span>Basic</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
