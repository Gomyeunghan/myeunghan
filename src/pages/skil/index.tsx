import Card from "@/components/card";
import S from "./skil.module.css";

const skil = [
  { title: "HTML/CSS", description: ["준내잘다룸"] },
  { title: "HTML/CSS", description: ["준내잘다룸"] },
  { title: "HTML/CSS", description: ["준내잘다룸"] },
  { title: "HTML/CSS", description: ["준내잘다룸"] },
];

export default function Skil() {
  return (
    <div className={S.contianer}>
      {skil.map((skils, index) => (
        <Card {...skils} key={index} />
      ))}
    </div>
  );
}
