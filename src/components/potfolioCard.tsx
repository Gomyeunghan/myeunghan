import S from "./potfolioCard.module.css";
import { potofolioDataType } from "@/type/potofolioType";

interface PotofolioCardProps {
  onCardClick: (index: number) => void;
  potofolioData: potofolioDataType[];
}

export default function PotofolioCard({
  onCardClick,
  potofolioData,
}: PotofolioCardProps) {
  return (
    <>
      {potofolioData.map((item, index) => (
        <article
          key={index}
          className={S.container}
          onClick={() => onCardClick(index)}
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
              {item.stack.map((item, index) => {
                return <span className={item} key={index}></span>;
              })}
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
