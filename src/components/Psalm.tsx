"use client";

import { motion } from "motion/react";
import { BookOpen } from "lucide-react";

const verses = [
  { number: 1, text: "Clap your hands, all you nations; shout to God with cries of joy." },
  { number: 2, text: "For the Lord Most High is awesome, the great King over all the earth." },
  { number: 3, text: "He subdued nations under us, peoples under our feet." },
  { number: 4, text: "He chose our inheritance for us, the pride of Jacob, whom he loved." },
  { number: 5, text: "God has ascended amid shouts of joy, the Lord amid the sounding of trumpets." },
  { number: 6, text: "Sing praises to God, sing praises; sing praises to our King, sing praises." },
  { number: 7, text: "For God is the King of all the earth; sing to him a psalm of praise." },
  { number: 8, text: "God reigns over the nations; God is seated on his holy throne." },
  {
    number: 9,
    text: "The nobles of the nations assemble as the people of the God of Abraham, for the kings of the earth belong to God; he is greatly exalted.",
  },
];

export default function Psalm() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 bg-gradient-to-b from-purple-50/30 via-cream to-purple-50/30 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-purple-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-fuchsia-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <BookOpen className="text-purple-400" size={20} />
            <span className="font-sans text-xs sm:text-sm tracking-[0.2em] uppercase text-purple-400 font-medium">
              My Prayer & Praise For You
            </span>
            <BookOpen className="text-purple-400" size={20} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-purple-900 mb-3">
            Psalm 47
          </h2>
          <p className="font-sans text-sm sm:text-base text-purple-600/70 italic">
            A psalm of praise and thanksgiving for the gift that you are
          </p>
        </motion.div>

        {/* Verses */}
        <div className="space-y-4 sm:space-y-5">
          {verses.map((verse, index) => (
            <motion.div
              key={verse.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <div className="flex gap-3 sm:gap-4 items-start">
                <span className="font-serif text-lg sm:text-xl text-purple-400/60 font-semibold mt-0.5 select-none min-w-[1.5rem] text-right">
                  {verse.number}
                </span>
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-purple-900/85 leading-relaxed group-hover:text-purple-800 transition-colors duration-300">
                  {verse.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 text-purple-300">
            <span className="w-12 sm:w-16 h-px bg-purple-200" />
            <span className="font-script text-2xl sm:text-3xl text-purple-400">Amen</span>
            <span className="w-12 sm:w-16 h-px bg-purple-200" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
