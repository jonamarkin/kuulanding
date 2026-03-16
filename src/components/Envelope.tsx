"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        onOpen();
      }, 1500);
    }
  };

  return (
    <div
      className="relative w-80 h-56 cursor-pointer z-10"
      style={{ perspective: "1000px" }}
      onClick={handleOpen}
    >
      <motion.div
        className="w-full h-full relative"
        animate={isOpen ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-purple-200 rounded-lg shadow-xl overflow-hidden border border-purple-300">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-100 to-purple-300"></div>
        </div>

        {/* Letter inside */}
        <motion.div
          className="absolute inset-x-4 bottom-0 bg-white rounded-t-lg shadow-inner border border-purple-100 flex flex-col items-center justify-start pt-6 px-4"
          initial={{ height: "90%" }}
          animate={
            isOpen
              ? { height: "150%", y: -100, zIndex: 20 }
              : { height: "90%", y: 0 }
          }
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="font-script text-3xl text-purple-600 mb-2">
            Happy 27th Birthday
          </p>
          <p className="font-serif text-sm text-center text-purple-800/80">
            To my everything, Kuu...
          </p>
          <Heart
            className="text-purple-400 mt-4"
            size={20}
            fill="currentColor"
          />
        </motion.div>

        {/* Envelope Flap (Top) */}
        <motion.div
          className="absolute top-0 inset-x-0 h-1/2 origin-top z-30"
          initial={{ rotateX: 0 }}
          animate={isOpen ? { rotateX: -180, zIndex: 10 } : { rotateX: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="w-full h-full bg-purple-300 rounded-t-lg shadow-sm border-b border-purple-400/30"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          ></div>
        </motion.div>

        {/* Envelope Front (Bottom) */}
        <div
          className="absolute bottom-0 inset-x-0 h-full bg-purple-200 rounded-b-lg z-20"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 40%, 50% 70%, 0 40%)",
          }}
        >
          {/* Wax Seal */}
          <motion.div
            className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center shadow-md border-2 border-purple-800/50"
            animate={
              isOpen
                ? { scale: 0, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.3 }}
          >
            <Heart className="text-purple-100" size={20} fill="currentColor" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
