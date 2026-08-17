"use client";

import { motion } from "framer-motion";

const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "AWS",
  "Framer Motion",
  "GraphQL",
  "Docker",
];

export function InfiniteMarquee() {
  return (
    <div className="w-full bg-white border-y border-gray-100 overflow-hidden py-10 relative">
      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        className="flex whitespace-nowrap gap-16 w-max items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Double the list to make it infinite */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="text-gray-400 font-medium text-lg tracking-wider uppercase">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
