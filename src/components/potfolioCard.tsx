"use client";

import { useEffect, useState } from "react";
import S from "./potfolioCard.module.css";
import { potofolioDataType } from "@/type/potofolioType";
import { motion } from "framer-motion";

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
    <div className={S.grid_container}>
      {potofolioData.map((item, index) => (
        <motion.div
          whileHover={{
            y: -10,
            transition: { ease: ["easeOut"], delay: 0 },
          }}
          key={index}
        >
          <motion.div
            key={index}
            onClick={() => onCardClick(index)}
            className={S.container}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                delay: index * 0.1, // staggered delay based on index
                ease: "easeOut",
              },
            }}
            viewport={{ once: false }} // 뷰포트에 들어갈 때마다 애니메이션 실행
          >
            <img src={item.img} alt="" />
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
                  alignItems: "center",
                }}
              >
                <h3>{item.title}</h3>
                <span
                  className={`${item.team === "persnol" ? S.bedge : S.team}`}
                >
                  {item.team}
                </span>
              </div>
              <p>{item.period}</p>
              <p>{item.explanation}</p>
              <div style={{ display: "flex", gap: "10px" }}>
                {item.stack.map((stackItem, index) => (
                  <span className={stackItem} key={index}></span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
