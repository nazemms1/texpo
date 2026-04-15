"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./CustomCursor.module.css";

type CursorState = "default" | "hover" | "click" | "text";

export function CustomCursor() {
  // Ring follows with spring lag
  const ringRawX = useMotionValue(-100);
  const ringRawY = useMotionValue(-100);
  const ringX = useSpring(ringRawX, { stiffness: 160, damping: 22, mass: 0.6 });
  const ringY = useSpring(ringRawY, { stiffness: 160, damping: 22, mass: 0.6 });

  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);

  // Detect touch-only devices and skip rendering
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const handleMove = (e: MouseEvent) => {
      ringRawX.set(e.clientX);
      ringRawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    const handleMouseDown = () => setState("click");
    const handleMouseUp = () => setState((s) => (s === "click" ? "default" : s));

    // Scan hovered element for interactive type
    const handleOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [role='button'], label")) {
        setState("hover");
      } else if (el.closest("input, textarea, [contenteditable]")) {
        setState("text");
      } else {
        setState("default");
      }
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleOver);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [visible]);

  if (isTouch) return null;

  const ringOpacity =
    !visible || state === "hover" || state === "text" ? 0 :
    state === "click" ? 0.9 :
    0.75;

  return (
    <motion.div
      className={styles.ring}
      style={{
        x: ringX,
        y: ringY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ opacity: ringOpacity, scale: state === "click" ? 0.7 : 1 }}
      transition={{ opacity: { duration: 0.15 }, scale: { type: "spring", stiffness: 280, damping: 22 } }}
    />
  );
}
