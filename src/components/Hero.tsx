"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen-safe w-full flex items-center justify-center overflow-hidden bg-purple-50"
    >
      {/* Background Image with Parallax and slow Scale */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity, scale }}>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-purple-900/30 to-cream z-10 md:from-purple-900/40 md:via-purple-900/20" />
        <Image
          src="/images/NOIR7397-EDIT.jpg"
          alt="Us together"
          fill
          className="object-cover object-[center_10%]"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 sm:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="text-purple-300" size={20} />
          </motion.div>
          <span className="font-sans tracking-[0.2em] sm:tracking-[0.3em] uppercase text-purple-100 text-xs sm:text-sm md:text-base font-medium">
            To My Clarion Clara
          </span>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <Sparkles className="text-purple-300" size={20} />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="font-script text-[3.2rem] leading-tight sm:text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-lg mb-4 sm:mb-6 md:mb-8"
        >
          Happy 27th Birthday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-50 italic max-w-2xl leading-relaxed drop-shadow-md px-2"
        >
          &ldquo;Every moment with you is a gift. Today, we celebrate the most
          precious gift of all—you, my Kuu.&rdquo;
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 sm:gap-2 text-purple-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="font-sans text-[10px] sm:text-xs tracking-widest uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
