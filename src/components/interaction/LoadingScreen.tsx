import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center bg-background"
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.span
              initial={{ opacity: 0, y: 14, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.22em" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl font-bold text-gradient"
            >
              MV
            </motion.span>
            <div className="h-px w-40 overflow-hidden bg-border">
              <motion.div
                className="h-full w-full origin-left"
                style={{ background: "linear-gradient(90deg, var(--accent), var(--accent2))" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
