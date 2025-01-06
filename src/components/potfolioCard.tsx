import S from "./potfolioCard.module.css";

export default function PotofolioCard() {
  return (
    <article className={S.container}>
      <img src="/image.png" alt="" />
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px ",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>포켓몬도감</h3>
          <span>persnol</span>
        </div>
        <p>2024.10.01~2024.11.01</p>
        <p>포켓몬api를 활용한 포켓몬도감</p>
        <div style={{ display: "flex", gap: "10px" }}>
          {["next", "react", "module", "type"].map((item, index) => {
            return <span className={item} key={index}></span>;
          })}
        </div>
      </div>
    </article>
  );
}
