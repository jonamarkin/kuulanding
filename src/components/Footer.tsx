"use client";

import { motion } from "motion/react";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 sm:py-32 px-6 sm:px-8 bg-purple-900 text-purple-50 relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Real photo background */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <Image
          src="/images/PXL_20221201_183345560.MP.jpg"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart
            className="text-purple-400 mx-auto mb-8"
            size={48}
            fill="currentColor"
          />
        </motion.div>

        <h2 className="font-script text-4xl sm:text-5xl md:text-7xl mb-4 sm:mb-6 text-purple-100">
          I Love You, Kuu
        </h2>

        <p className="font-serif text-lg sm:text-xl md:text-2xl text-purple-200/80 max-w-2xl mx-auto italic mb-8 sm:mb-12 px-2">
          Happy 27th Birthday, my beautiful Clarion Clara. Here&apos;s to a
          lifetime of birthdays together.
        </p>

        <div className="flex items-center justify-center gap-4 text-purple-400/60 font-sans text-sm tracking-widest uppercase">
          <span>Forever</span>
          <span className="w-1 h-1 rounded-full bg-purple-400/60" />
          <span>Always</span>
        </div>
      </motion.div>
    </footer>
  );
}
