"use client";

import { useState, useEffect } from "react";

export function AnimatedText({
  texts,
  interval = 2500,
}: {
  texts: string[];
  interval?: number;
}) {
  const [currentText, setCurrentText] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const changeText = () => {
      setAnimationClass("");
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setAnimationClass("fade-in");
      }, 800); // Duration of the flip animation
    };

    const intervalId = setInterval(changeText, interval);
    return () => clearInterval(intervalId);
  }, [texts.length, interval]);

  return (
    <span className={`text-primary relative ${animationClass}`} style={{ zIndex: -10 }}>
      {texts[currentText]}
    </span>
  );
}
