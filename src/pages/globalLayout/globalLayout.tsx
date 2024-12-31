// GlobalLayout.tsx
import S from "./globalLayOut.module.css";
import React, { ReactNode } from "react";
import useMoveScrool from "@/hook/useMoveScroll";

interface GlobalLayOut {
  children: ReactNode;
}

export default function GlobalLayOut({ children }: GlobalLayOut) {
  const { element: aboutRef, onMoveToElement: moveToAbout } = useMoveScrool();
  const { element: skilRef, onMoveToElement: moveToSkill } = useMoveScrool();
  const { element: portfolioRef, onMoveToElement: moveToPortfolio } =
    useMoveScrool();

  // ref 객체들을 하나의 객체로 묶어서 전달
  const refs = {
    aboutRef,
    skilRef,
    portfolioRef,
  };

  return (
    <>
      <header className={S.container}>
        <button>MyeungHan</button>
        <nav className={S.menu}>
          <button onClick={moveToAbout}>About</button>
          <button onClick={moveToSkill}>Skill</button>
          <button onClick={moveToPortfolio}>Portfolio</button>
        </nav>
      </header>

      {/* children에 ref 전달 */}
      {React.cloneElement(children as React.ReactElement, { refs })}
    </>
  );
}
