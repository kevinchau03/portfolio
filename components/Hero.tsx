'use client';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export function Hero() {
  const textIndex = useMotionValue(0);
  const texts = [
    "Software Engineer",
    "Web Developer",
    "Python Developer",
    "React Developer",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-center">
          Hey, my name's Kevin Chau
        </h1>
        <motion.span className="text-6xl text-sky-600">{displayText}</motion.span>
      </div>
    </div>
  );
}
