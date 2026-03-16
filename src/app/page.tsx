"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";

import Hero from "@/components/Hero";
import Envelope from "@/components/Envelope";
import Reasons from "@/components/Reasons";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [windowSize, setWindowSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    const handleResize = () =>
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpened) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
      };

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ["#e9d5ff", "#c084fc", "#9333ea", "#ffffff"],
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ["#e9d5ff", "#c084fc", "#9333ea", "#ffffff"],
        });
      }, 250);

      setTimeout(() => {
        setShowContent(true);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isOpened]);

  return (
    <div className="min-h-screen bg-cream selection:bg-purple-200 selection:text-purple-900">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="envelope-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-screen-safe flex flex-col items-center justify-center p-4 relative overflow-hidden"
          >
            {/* Floating background hearts */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              {windowSize.w > 0 &&
                [...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-purple-400"
                    initial={{
                      x: Math.random() * windowSize.w,
                      y: windowSize.h + 100,
                      scale: Math.random() * 0.5 + 0.5,
                      rotate: Math.random() * 360,
                    }}
                    animate={{
                      y: -100,
                      rotate: Math.random() * 360 + 360,
                    }}
                    transition={{
                      duration: Math.random() * 10 + 15,
                      repeat: Infinity,
                      ease: "linear",
                      delay: Math.random() * 10,
                    }}
                  >
                    <Heart fill="currentColor" size={24} />
                  </motion.div>
                ))}
            </div>

            <div className="text-center mb-12 z-10">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-serif text-3xl sm:text-4xl md:text-6xl text-purple-800 mb-3 sm:mb-4"
              >
                A Special Delivery
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-purple-600/80 font-medium tracking-widest uppercase text-xs sm:text-sm"
              >
                For Clarion Clara (My Kuu)
              </motion.p>
            </div>

            <Envelope onOpen={() => setIsOpened(true)} />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-8 sm:mt-12 text-purple-400/60 text-xs sm:text-sm italic z-10"
            >
              Tap the envelope to open
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="w-full"
          >
            <Hero />
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Reasons />
                <Story />
                <Gallery />
                <Footer />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
