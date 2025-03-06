import S from "./ClickPreView.module.css";

export default function ClickPreView({
  src,
  onClick,
}: {
  src: string;
  onClick: () => void;
}) {
  return (
    <div className={S.contianer} onClick={onClick}>
      <img
        src={src}
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
      ></img>
    </div>
  );
}
