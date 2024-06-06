import { useState, useEffect } from "react";

export function AnimatedText({
  texts,
  interval = 2000,
}: {
  texts: string[];
  interval?: number;
}) {
  const [currentText, setCurrentText] = useState(0);
  const [animationClass, setAnimationClass] = useState(
    "blur-out-expand"
  );

  useEffect(() => {
    const changeText = () => {
      setAnimationClass("blur-out-expand");
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setAnimationClass("fade-in");
      }, 800); // Duration of the flip animation
    };

    const intervalId = setInterval(changeText, interval);

    return () => clearInterval(intervalId);
  }, [texts.length, interval]);

  return (
    <div className={`relative ${animationClass}`}>{texts[currentText]}</div>
  );
}
