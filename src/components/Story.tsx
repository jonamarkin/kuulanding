"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const chapters = [
  {
    id: 1,
    title: "The First Chapter",
    subtitle: "Where it all began",
    description:
      "The moment you walked into my life, everything changed. Your gentle soul and radiant smile captivated me instantly, and I knew my life would never be the same.",
    image: "/images/IMG-20200510-WA0049.jpg",
    align: "left" as const,
  },
  {
    id: 2,
    title: "Growing in Faith & Love",
    subtitle: "A bond built on grace",
    description:
      "Watching your faith and seeing the Godly woman you are has been my greatest inspiration. Your wisdom and understanding guide us through every season.",
    image: "/images/PXL_20210725_121704806.PORTRAIT.jpg",
    align: "right" as const,
  },
  {
    id: 3,
    title: "Countless Adventures",
    subtitle: "Creating memories",
    description:
      "From quiet mornings to our biggest adventures, every second with you is a treasure. Your laugh is the soundtrack to my favorite memories.",
    image: "/images/PXL_20221127_220802543.PORTRAIT.jpg",
    align: "left" as const,
  },
  {
    id: 4,
    title: "Today & Always",
    subtitle: "Happy 27th, My Kuu",
    description:
      "Today we celebrate 27 years of you bringing light into this world. You are breathtakingly beautiful, inside and out. I can't wait for all our tomorrows.",
    image: "/images/IMG_20240914_214417_582.jpg",
    align: "right" as const,
  },
];

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="py-24 px-4 md:px-8 bg-cream relative overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-purple-900 mb-4"
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-purple-600/80 max-w-2xl mx-auto"
          >
            Every moment with you is a beautiful chapter in my favorite book.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Timeline Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-100 -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-purple-400 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16 sm:space-y-24">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className={`relative flex flex-col md:flex-row items-center justify-between group ${
                  chapter.align === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-cream -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                />

                {/* Image Side */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0 mb-6 sm:mb-8 md:mb-0">
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: chapter.align === "left" ? -50 : 50,
                      rotate: chapter.align === "left" ? -5 : 5,
                    }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      bounce: 0.4,
                    }}
                    className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[4/3] group-hover:shadow-2xl transition-shadow duration-500"
                  >
                    <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image
                      src={chapter.image}
                      alt={chapter.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </motion.div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0 flex flex-col justify-center">
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: chapter.align === "left" ? 50 : -50,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`bg-white/50 backdrop-blur-sm p-5 sm:p-8 rounded-2xl border border-purple-100 shadow-sm ${
                      chapter.align === "left"
                        ? "md:text-left"
                        : "md:text-right"
                    }`}
                  >
                    <span className="font-sans text-xs tracking-widest uppercase text-purple-400 mb-2 block">
                      {chapter.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-purple-900 mb-3 sm:mb-4">
                      {chapter.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-purple-700/80 leading-relaxed">
                      {chapter.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
