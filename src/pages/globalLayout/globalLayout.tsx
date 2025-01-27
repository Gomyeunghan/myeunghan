"use client";

// GlobalLayout.tsx
import S from "./globalLayOut.module.css";
import React, { ReactNode, useState } from "react";
import useMoveScrool from "@/hook/useMoveScroll";
import { PageStoreProvider } from "@/provider/StoreProvider";

interface GlobalLayOut {
  children: ReactNode;
}

// refs 타입 정의 추가
interface RefsProps {
  refs?: {
    aboutRef: React.RefObject<HTMLDivElement | null>;
    skilRef: React.RefObject<HTMLDivElement | null>;
    portfolioRef: React.RefObject<HTMLDivElement | null>;
  };
}

export default function GlobalLayOut({ children }: GlobalLayOut) {
  const { element: aboutRef, onMoveToElement: moveToAbout } = useMoveScrool();
  const { element: skilRef, onMoveToElement: moveToSkill } = useMoveScrool();
  const { element: portfolioRef, onMoveToElement: moveToPortfolio } =
    useMoveScrool();
  const [isActive, setIsActive] = useState(false);

  // ref 객체들을 하나의 객체로 묶어서 전달
  const refs = {
    aboutRef,
    skilRef,
    portfolioRef,
  };

  console.log(isActive);
  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <PageStoreProvider>
      <div className={S.container}>
        {/* isActive 일때메뉴바 내려와야됨 기존 메뉴바는 숨겨야됨  */}

        <header className={S.header}>
          <button
            className="oleo-script-bold"
            style={{ border: "none", background: "none", cursor: "pointer" }}
          >
            Light_Han
          </button>
          <div
            className={`${S.bar_container} ${isActive ? S.active : ""}`}
            onClick={toggleMenu}
          >
            <div className={S.bar}></div>
            <div className={S.bar}></div>
            <div className={S.bar}></div>
          </div>

          <nav className={`${S.mobile_menu} ${isActive ? S.active : ""}`}>
            <div className={S.button_wrapper}>
              <button onClick={moveToAbout}>About</button>
              <button onClick={moveToSkill}>Skill</button>
              <button onClick={moveToPortfolio}>Portfolio</button>
            </div>
          </nav>

          <nav className={S.menu}>
            <div className={S.button_wrapper}>
              <button onClick={moveToAbout}>About</button>
              <button onClick={moveToSkill}>Skill</button>
              <button onClick={moveToPortfolio}>Portfolio</button>
            </div>
          </nav>
        </header>

        {/* children에 ref 전달 */}
        {React.cloneElement(children as React.ReactElement<RefsProps>, {
          refs,
        })}
      </div>
    </PageStoreProvider>
  );
}
