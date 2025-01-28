import { useEffect, useRef, useState } from "react";
import S from "./TypingComponent.module.css";
import { usePageStore } from "@/provider/StoreProvider";

const TypingComponent = () => {
  const [word, setWord] = useState("");
  const sentence = "Hello! Im Super Energizer.";
  const currentIndex = useRef(0);
  const [intro, setIntro] = useState(false);
  const { isValied, setIsValied } = usePageStore((state) => state);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timerId = setInterval(() => {
      window.scrollTo(0, 0);
      if (sentence.length > currentIndex.current) {
        setWord((state) => {
          const newState = state + sentence[currentIndex.current];
          currentIndex.current += 1;
          console.log(sentence.length, currentIndex.current);
          setIntro(true);
          return newState;
        });
      } else {
        clearInterval(timerId); // 조건 만족 시 타이머 정리
        setTimeout(() => {
          setOpacity(0);
        }, 500);
        setTimeout(() => {
          setIsValied();
          console.log(isValied);
        }, 1000);
        setIntro(false);
      }
    }, 100);

    return () => clearInterval(timerId); // cleanup 함수
  }, []); // 빈 배열

  useEffect(() => {
    if (intro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [intro]);
  console.log("인트로", intro);

  return (
    <div
      className={S.container}
      style={{
        display: isValied ? "flex" : "none",
        opacity: opacity,
        transition: "opacity 1s ease",
      }}
    >
      {word}
    </div>
  );
};

export default TypingComponent;
