import S from "./card.module.css";
import dynamic from "next/dynamic";

const MotionUl = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.ul),
  { ssr: false }
);

export default function Card({
  title,
  description,
  duration,
}: {
  title: string;
  description: string[];
  duration: number;
}) {
  return (
    <MotionUl
      className={S.container}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: duration * 0.2 }}
    >
      <h1 className={S.title}>{title}</h1>
      {description.map((desc, index) => (
        <li key={index} className={S.description}>
          {desc}
        </li>
      ))}
    </MotionUl>
  );
}
