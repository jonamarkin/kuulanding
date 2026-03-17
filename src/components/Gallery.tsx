"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRef } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

const allPhotos = [
  { src: "/images/NOIR7397-EDIT.jpg", alt: "Us together", caption: "Forever and always" },
  { src: "/images/NOIR7395.jpg", alt: "Beautiful Kuu", caption: "Breathtakingly beautiful" },
  { src: "/images/COLOR_POP.jpg", alt: "Vibrant love", caption: "Colors of our love" },
  { src: "/images/$terlin-134.jpg", alt: "Our moment", caption: "Precious moments" },
  { src: "/images/IMG_7558~2.jpg", alt: "Together always", caption: "Together always" },
  { src: "/images/IMG-20200705-WA0066.jpg", alt: "Beautiful day", caption: "A beautiful day" },
  { src: "/images/IMG-20201018-WA0049.jpg", alt: "Love and laughter", caption: "Love and laughter" },
  { src: "/images/IMG-20210513-WA0038.jpg", alt: "Growing together", caption: "Growing together" },
  { src: "/images/IMG-20210920-WA0000.jpg", alt: "Our adventure", caption: "Our adventure" },
  { src: "/images/IMG-20220525-WA0029.jpg", alt: "Special day", caption: "A special day" },
  { src: "/images/IMG-20230916-WA0063~2.jpg", alt: "Radiant smile", caption: "Your radiant smile" },
  { src: "/images/IMG-20251122-WA0036.jpg", alt: "Latest moment", caption: "Every moment matters" },
  { src: "/images/IMG_20210513_192052_773.jpg", alt: "Gentle soul", caption: "My gentle soul" },
  { src: "/images/IMG_20210513_192059_880.jpg", alt: "Perfect pair", caption: "Perfect pair" },
  { src: "/images/IMG_20210513_192456_583.jpg", alt: "Pure joy", caption: "Pure joy" },
  { src: "/images/IMG_20210524_091949_234.jpg", alt: "Morning light", caption: "Morning light" },
  { src: "/images/IMG_20210530_231002_635.jpg", alt: "Evening grace", caption: "Evening grace" },
  { src: "/images/IMG_20230521_175513_116.jpg", alt: "Golden hour", caption: "Golden hour" },
  { src: "/images/IMG_20240416_210649_086.jpg", alt: "Night sky", caption: "Under the stars" },
  { src: "/images/IMG_20240914_214417_582.jpg", alt: "Our story", caption: "Our beautiful story" },
  { src: "/images/IMG_20251013_211844_880.jpg", alt: "Together", caption: "Always together" },
  { src: "/images/PXL_20221016_120853735.PORTRAIT.jpg", alt: "Gentle soul", caption: "Soft and gentle" },
  { src: "/images/PXL_20221022_115245578.PORTRAIT.jpg", alt: "Wisdom shines", caption: "Wisdom shines through" },
  { src: "/images/Picsart_23-04-24_14-16-12-024.jpg", alt: "Artful love", caption: "A work of art" },
];

// Grid layout patterns - cycles through layouts for visual variety 
const gridPatterns = [
  "col-span-2 row-span-2",   // 0: large
  "col-span-1 row-span-1",   // 1: small
  "col-span-1 row-span-1",   // 2: small
  "col-span-1 row-span-2",   // 3: tall
  "col-span-2 row-span-1",   // 4: wide
  "col-span-1 row-span-1",   // 5: small
];

export default function Gallery() {
  const ref = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goTo = useCallback(
    (dir: 1 | -1) => {
      setLightboxIndex((prev) => {
        if (prev === null) return null;
        const total = allPhotos.length + 1; // +1 for video
        return (prev + dir + total) % total;
      });
    },
    []
  );

  const totalItems = allPhotos.length + 1; // photos + 1 video

  return (
    <section ref={ref} className="py-24 px-4 md:px-8 bg-purple-50/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-purple-900 mb-4"
          >
            Our Beautiful Moments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-purple-600/80 max-w-2xl mx-auto"
          >
            A collection of memories that I will cherish forever. Tap any
            photo to view.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[200px]">
          {allPhotos.map((photo, index) => {
            const pattern = gridPatterns[index % gridPatterns.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
                className={`relative group overflow-hidden rounded-2xl ${pattern} shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 sm:p-4">
                  <div>
                    <p className="font-serif text-white text-sm sm:text-lg md:text-xl mb-0.5 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Video tile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden rounded-2xl col-span-2 row-span-2 shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer bg-purple-900"
            onClick={() => openLightbox(allPhotos.length)}
          >
            <video
              src="/images/VID-20230916-WA0037.mp4"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play
                  className="text-white ml-1"
                  size={28}
                  fill="currentColor"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-serif text-white text-lg sm:text-xl">Our Video</p>
              <p className="font-sans text-white/80 text-xs sm:text-sm">
                Play to relive the moment
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center hover:bg-white/25 active:bg-white/30 transition-colors"
            >
              <X className="text-white" size={22} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(-1);
              }}
              className="absolute left-2 sm:left-4 md:left-8 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center hover:bg-white/25 active:bg-white/30 transition-colors"
            >
              <ChevronLeft className="text-white" size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(1);
              }}
              className="absolute right-2 sm:right-4 md:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center hover:bg-white/25 active:bg-white/30 transition-colors"
            >
              <ChevronRight className="text-white" size={22} />
            </button>

            {/* Content */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-[95vw] sm:w-[90vw] h-[80vh] sm:h-[85vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxIndex < allPhotos.length ? (
                <>
                  <Image
                    src={allPhotos[lightboxIndex].src}
                    alt={allPhotos[lightboxIndex].alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 to-transparent text-center">
                    <p className="font-serif text-white text-lg sm:text-2xl">
                      {allPhotos[lightboxIndex].caption}
                    </p>
                    <p className="font-sans text-white/60 text-xs sm:text-sm mt-1">
                      {lightboxIndex + 1} / {totalItems}
                    </p>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <video
                    src="/images/VID-20230916-WA0037.mp4"
                    className="max-w-full max-h-full rounded-lg"
                    controls
                    autoPlay
                    playsInline
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
