import PotofolioCard from "@/components/potfolioCard";
import S from "./potofolio.module.css";

export default function Potofolio() {
  return (
    <div style={{ height: "100lvh" }}>
      <h2 className={S.title}>Potofolio</h2>
      <PotofolioCard />
    </div>
  );
}
