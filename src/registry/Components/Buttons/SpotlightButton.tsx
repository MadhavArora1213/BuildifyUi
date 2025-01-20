import { motion } from "framer-motion";
import React, { useRef, useEffect, useCallback } from "react";

const SpotlightButton = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  // Optimized Event Handlers using useCallback
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { width, height } = (e.target as HTMLElement).getBoundingClientRect();
    const offsetX = e.offsetX;
    const offsetY = e.offsetY;

    // Smooth gradient movement calculation
    const left = `${(offsetX / width) * 100}%`;
    const top = `${(offsetY / height) * 100}%`;

    spanRef.current?.animate(
      { left, top, background: "radial-gradient(circle, #ff9a9e, #fad0c4)" },
      { duration: 300, fill: "forwards" }
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    spanRef.current?.animate(
      { left: "50%", top: "50%", background: "radial-gradient(circle, #6a11cb, #2575fc)" },
      { duration: 150, fill: "forwards" }
    );
  }, []);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-xl border border-white/30 bg-black px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/30 backdrop-blur-md transition-transform duration-300 hover:scale-105"
      aria-label="3D Spotlight Button"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference text-xl tracking-wide">
        Hover Me 🚀
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-40 w-40 -translate-x-[50%] -translate-y-[50%] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 blur-xl transition-all duration-300"
      />
    </motion.button>
  );
};

export default SpotlightButton;
