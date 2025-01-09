import { useEffect, useState } from "react";
import S from "./potfolioCard.module.css";
import { potofolioDataType } from "@/type/potofolioType";
import dynamic from "next/dynamic";

// Motion을 동적으로 불러오기 (SSR 비활성화)
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

interface PotofolioCardProps {
  onCardClick: (index: number) => void;
  potofolioData: potofolioDataType[];
}

export default function PotofolioCard({
  onCardClick,
  potofolioData,
}: PotofolioCardProps) {
  const [isClient, setClient] = useState(false);

  // 클라이언트에서만 렌더링
  useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className={S.grid_container} style={{ minHeight: "100px" }}>
      {potofolioData.map((item, index) => (
        <MotionDiv
          key={index}
          onClick={() => onCardClick(index)}
          className={S.container}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1, // staggered delay based on index
            ease: "easeOut",
          }}
          viewport={{ once: false }} // 뷰포트에 들어갈 때마다 애니메이션 실행
        >
          <img src="/image.png" alt="" />
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3>{item.title}</h3>
              <span>{item.team}</span>
            </div>
            <p>{item.period}</p>
            <p>{item.explanation}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              {item.stack.map((stackItem, index) => (
                <span className={stackItem} key={index}></span>
              ))}
            </div>
          </div>
        </MotionDiv>
      ))}
    </div>
  );
}
