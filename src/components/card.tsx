import S from "./card.module.css";

export default function Card({
  title,
  description,
}: {
  title: string;
  description: string[];
}) {
  return (
    <div style={{ flex: "1" }}>
      <ul className={S.container}>
        <h1>{title}</h1>
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}
