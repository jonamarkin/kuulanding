"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Star, Sparkles, Shield, Crown, Feather } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    id: 1,
    title: "Your Kind Heart",
    description:
      "You are really kind and love wholeheartedly. Your grace touches everyone around you.",
    icon: Heart,
    color: "text-purple-500",
    bg: "bg-purple-50",
    image: "/images/PXL_20211121_113441231.PORTRAIT.jpg",
  },
  {
    id: 2,
    title: "Your Gentle Soul",
    description:
      "You are soft, gentle, and softspoken. Your presence brings peace to my life.",
    icon: Feather,
    color: "text-fuchsia-500",
    bg: "bg-fuchsia-50",
    image: "/images/PXL_20221016_120853735.PORTRAIT.jpg",
  },
  {
    id: 3,
    title: "Your Wisdom",
    description:
      "You are wise and understanding, always seeking to understand before being understood.",
    icon: Star,
    color: "text-violet-500",
    bg: "bg-violet-50",
    image: "/images/PXL_20221022_115245578.PORTRAIT.jpg",
  },
  {
    id: 4,
    title: "Your Faith",
    description:
      "You are a Godly woman. Your Christian faith inspires me to be a better person every day.",
    icon: Sparkles,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    image: "/images/IMG_20210513_192052_773.jpg",
  },
  {
    id: 5,
    title: "Your Strength",
    description:
      "You are strong and graceful, navigating life's challenges with such elegance.",
    icon: Shield,
    color: "text-pink-500",
    bg: "bg-pink-50",
    image: "/images/IMG_20230521_175513_116.jpg",
  },
  {
    id: 6,
    title: "Your Beauty",
    description:
      "You are breathtakingly beautiful, inside and out. My Clarion Clara.",
    icon: Crown,
    color: "text-purple-600",
    bg: "bg-purple-100",
    image: "/images/NOIR7395.jpg",
  },
];

export default function Reasons() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 md:px-8 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-50/50 to-transparent pointer-events-none" />
      <div className="absolute -left-32 top-32 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-32 bottom-32 w-96 h-96 bg-fuchsia-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-purple-900 mb-4"
          >
            So Many Reasons To Love You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-purple-600/80 max-w-2xl mx-auto"
          >
            Just a few of the million reasons why you mean the world to me.
            Click on each card to reveal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-56 sm:h-64 rounded-2xl cursor-pointer overflow-hidden group border border-purple-100 shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() =>
                setActiveId(activeId === reason.id ? null : reason.id)
              }
            >
              {/* Background image */}
              <Image
                src={reason.image}
                alt={reason.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-white/70 backdrop-blur-sm transition-opacity duration-300 md:group-hover:opacity-0 md:group-hover:pointer-events-none"
                  style={{ opacity: activeId === reason.id ? 0 : 1 }}
                >
                  <div
                    className={`p-4 rounded-full bg-white shadow-sm mb-4 ${reason.color}`}
                  >
                    <reason.icon size={32} />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-purple-900">
                    {reason.title}
                  </h3>
                  <p className="text-xs font-sans uppercase tracking-widest text-purple-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity md:hidden">
                    Tap to reveal
                  </p>
                </motion.div>

                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/80 backdrop-blur-sm transition-opacity duration-300 opacity-0 md:group-hover:opacity-100"
                  style={{ opacity: activeId === reason.id ? 1 : undefined }}
                >
                  <p className="font-sans text-base sm:text-lg text-purple-800 leading-relaxed">
                    &ldquo;{reason.description}&rdquo;
                  </p>
                  <Heart
                    className="text-purple-300 mt-6"
                    size={20}
                    fill="currentColor"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
