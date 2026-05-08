"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Heart } from "lucide-react";
import { fadeInUp } from "@/components/animations/motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center gap-6"
        >
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="mailto:siumanliu029@gmail.com"
              className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href="https://github.com/Siusiuuu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Hannah Liu
            </p>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
