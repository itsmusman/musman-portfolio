import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface IntroPreloaderProps {
  onComplete?: () => void;
}

export default function IntroPreloader({ onComplete }: IntroPreloaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // If user prefers reduced motion or already viewed this session, exit immediately
    if (shouldReduceMotion) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    const startTime = performance.now();
    const duration = 650; // Quick 650ms progress count

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed < duration) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 120);
      }
    };

    const frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, [shouldReduceMotion, onComplete]);

  if (shouldReduceMotion) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between p-8 sm:p-12 bg-[#11110F] text-[#F2F0E9] select-none pointer-events-auto"
        >
          {/* Top metadata */}
          <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-[#8E8D86] uppercase">
            <span>Portfolio</span>
            <span>2026 Edition</span>
          </div>

          {/* Center Identity */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight"
            >
              MUHAMMAD USMAN
            </motion.h1>
            <p className="font-mono text-xs sm:text-sm text-[#879B8F] tracking-wide">
              Full Stack Software Engineer · Expanding into AI/ML
            </p>
          </div>

          {/* Bottom Counter */}
          <div className="flex items-end justify-between border-t border-white/[0.08] pt-6 font-mono">
            <span className="text-[10px] tracking-[0.2em] text-[#8E8D86] uppercase">
              Initializing Experience
            </span>
            <div className="text-2xl sm:text-3xl font-semibold tabular-nums text-[#F2F0E9]">
              {String(progress).padStart(2, "0")}
              <span className="text-xs text-[#879B8F] ml-1">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
