import Card from "@/components/card";
import S from "./index.module.css";

const skil = [
  { title: "HTML/CSS", description: ["준내잘다룸"] },
  { title: "HTML/CSS", description: ["준내잘다룸"] },
  { title: "HTML/CSS", description: ["준내잘다룸"] },
  { title: "HTML/CSS", description: ["준내잘다룸"] },
];

export default function Skil() {
  return (
    <div className={S.container}>
      <h2 className={S.title}>SKIL</h2>
      <div className={S.cardwrapper}>
        {skil.map((skils, index) => (
          <Card {...skils} key={index} />
        ))}
      </div>
    </div>
  );
}
