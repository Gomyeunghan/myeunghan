import { useEffect, useRef, useState } from "react";
import S from "./TypingComponent.module.css";

const TypingComponent = () => {
  const [word, setWord] = useState("");
  const sentence = "Hello! Im Super Energizer.";
  const currentIndex = useRef(0);
  const [intro, setIntro] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (sentence.length > currentIndex.current) {
        setWord((state) => {
          const newState = (state += sentence[currentIndex.current]);
          currentIndex.current += 1;
          console.log(sentence.length, currentIndex.current);
          setIntro(true);

          return newState;
        });
      }
      if (sentence.length === currentIndex.current) {
        setTimeout(() => {
          setOpacity(0);
        }, 500);
        setTimeout(() => {
          setIsVisible(false);
        }, 2000);
        setIntro(false);
      }
    }, 100);

    return () => clearTimeout(timerId);
  }, [sentence]);

  useEffect(() => {
    if (intro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [intro]);

  return (
    <div
      className={S.container}
      style={{
        display: isVisible ? "flex" : "none",
        opacity: opacity,
        transition: "opacity 1s ease",
      }}
    >
      {word}
    </div>
  );
};

export default TypingComponent;
