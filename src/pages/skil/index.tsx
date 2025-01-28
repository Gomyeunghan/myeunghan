import Card from "@/components/card";
import S from "./index.module.css";
import { useEffect } from "react";

const skil = [
  {
    title: "HTML/CSS",
    description: [
      "HTML5와 CSS3에 능숙하며, 웹 표준과 시맨틱 마크업을 준수합니다.",
      "CSS Flexbox와 Grid를 활용한 반응형 웹 디자인 구현에 능숙합니다.",
      "다양한 브라우저 및 디바이스 호환성을 고려한 웹 레이아웃 제작이 가능합니다.",
    ],
  },
  {
    title: "JavaScript",
    description: [
      "ES6+ 문법을 활용한 동적 웹 애플리케이션 제작이 가능합니다.",
      "비동기 처리(Promise, async/await)를 활용한 데이터 처리 경험이 있습니다.",
      "DOM 조작 및 이벤트 핸들링을 통해 UI 상호작용을 구현할 수 있습니다.",
    ],
  },
  {
    title: "TypeScript",
    description: [
      "React 컴포넌트와 Props에 대한 타입 정의 경험이 있습니다.",
      "기본적인 타입 지정 및 인터페이스를 활용해 타입 안전성을 확보합니다.",
    ],
  },
  {
    title: "Next.js",
    description: [
      "페이지 기반 라우팅과 동적 라우팅을 활용한 프로젝트 경험이 있습니다.",
      "SSR(Server-Side Rendering)과 SSG(Static Site Generation)를 활용한 렌더링 최적화 경험이 있습니다.",
    ],
  },
];

export default function Skil() {
  return (
    <>
      <h2 className={S.title}>SKILL</h2>
      <div className={S.container}>
        <div className={S.cardwrapper}>
          {skil.map((skils, index) => (
            <Card {...skils} key={index} duration={index} />
          ))}
        </div>
      </div>
    </>
  );
}
