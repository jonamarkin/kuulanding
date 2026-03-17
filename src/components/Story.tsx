"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const chapters = [
  {
    id: 1,
    title: "Your Radiant Smile",
    subtitle: "A moment I treasure",
    description:
      "Every time you smile, the whole world lights up. This year, I pray that God fills your days with so much joy that this beautiful smile never fades.",
    image: "/images/IMG-20200510-WA0049.jpg",
    align: "left" as const,
  },
  {
    id: 2,
    title: "Our Silly Moments",
    subtitle: "Laughter with you",
    description:
      "No one makes me laugh the way you do. This year, may we share even more of these silly, carefree, joyful moments together.",
    image: "/images/PXL_20221016_120959812.PORTRAIT.jpg",
    align: "right" as const,
  },
  {
    id: 3,
    title: "Quiet Evenings Together",
    subtitle: "Peace in your presence",
    description:
      "Some of my favorite moments are the quiet ones — just being with you. I wish you a year filled with peace, rest, and the warm comfort of love.",
    image: "/images/Snapchat-1338999620.jpg",
    align: "left" as const,
  },
  {
    id: 4,
    title: "Celebrating You",
    subtitle: "You deserve the world",
    description:
      "Every celebration with you feels magical. This year, I pray you are celebrated, honored, and loved beyond measure — because you deserve nothing less.",
    image: "/images/PXL_20201219_065438473.PORTRAIT.jpg",
    align: "right" as const,
  },
  {
    id: 5,
    title: "Walking in Faith",
    subtitle: "God's grace upon you",
    description:
      "Your faith inspires me every single day. This year, may God's grace overflow in your life, may His favor surround you, and may His plans for you unfold beautifully.",
    image: "/images/PXL_20210725_121704806.PORTRAIT.jpg",
    align: "left" as const,
  },
  {
    id: 6,
    title: "Your Gentle Heart",
    subtitle: "Kindness that heals",
    description:
      "You love so gently and so deeply. I pray that this year, every ounce of kindness you've given comes back to you multiplied — you deserve all the love in the world.",
    image: "/images/PXL_20211121_113441231.PORTRAIT.jpg",
    align: "right" as const,
  },
  {
    id: 7,
    title: "Adventures Await",
    subtitle: "New places, new memories",
    description:
      "Every adventure is better with you by my side. This year, may we explore new places, try new things, and create memories that last a lifetime.",
    image: "/images/PXL_20211224_125443302.PORTRAIT.jpg",
    align: "left" as const,
  },
  {
    id: 8,
    title: "Golden Moments",
    subtitle: "The little things",
    description:
      "It's the little things with you that mean the most — a look, a touch, a shared silence. I wish you a year where every small moment feels golden.",
    image: "/images/PXL_20220710_211041316.PORTRAIT.jpg",
    align: "right" as const,
  },
  {
    id: 9,
    title: "Strength & Grace",
    subtitle: "You inspire me",
    description:
      "The way you carry yourself with such strength and grace amazes me. This year, may you walk boldly into every room knowing how powerful and beautiful you are.",
    image: "/images/PXL_20221127_220802543.PORTRAIT.jpg",
    align: "left" as const,
  },
  {
    id: 10,
    title: "Dreams Coming True",
    subtitle: "Your season of harvest",
    description:
      "You have worked so hard and believed so faithfully. I pray that this is the year your biggest dreams begin to manifest — you deserve every blessing coming your way.",
    image: "/images/PXL_20221201_183345560.MP.jpg",
    align: "right" as const,
  },
  {
    id: 11,
    title: "Unstoppable Together",
    subtitle: "Us against the world",
    description:
      "Together, there is nothing we can't conquer. This year, may our bond grow even deeper, our love even stronger, and our partnership even more unshakable.",
    image: "/images/IMG_6529.jpg",
    align: "left" as const,
  },
  {
    id: 12,
    title: "Here's to 27",
    subtitle: "Happy Birthday, My Kuu",
    description:
      "This is your year, my love. A year of answered prayers, overflowing joy, divine surprises, and a love that only grows sweeter. Happy 27th Birthday, my Clarion Clara. I love you endlessly.",
    image: "/images/IMG_20251013_210848_209.jpg",
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
            Beautiful Moments & Wishes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-purple-600/80 max-w-2xl mx-auto"
          >
            Every moment with you is a gift. Here are some of my favorites, along with my wishes for your beautiful new year.
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
                className={`relative flex flex-col md:flex-row items-center justify-between group ${chapter.align === "right" ? "md:flex-row-reverse" : ""
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
                    className={`bg-white/50 backdrop-blur-sm p-5 sm:p-8 rounded-2xl border border-purple-100 shadow-sm ${chapter.align === "left"
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
