"use client";

import DownArrow from "@/components/DownArrow";
import S from "./index.module.css";
import { usePageStore } from "@/provider/StoreProvider";
export default function About() {
  const title = "Super \r\n Energizer";

  const { isValied } = usePageStore((state) => state);

  console.log(isValied);

  return (
    <div className={S.container}>
      <div className={S.components}>
        <div>
          <img
            src="/스크린샷 2025-01-01 00.18.31.png"
            className={S.image}
          ></img>
          <div
            className={S.title}
            style={
              isValied
                ? { opacity: "0", transform: "translateY(-20px)" }
                : {
                    opacity: "1",
                    transform: "translateY(0)",
                    transition:
                      "opacity 1s ease-in-out, transform 1s ease-in-out",
                  }
            }
          >
            <pre className="oleo-script-regular">{title}</pre>
          </div>

          <div className={S.linkbox}>
            <a>GitHub</a>
            <a>Velog</a>
            <a>Email</a>
          </div>
        </div>
        <div className={S.about}>
          <h2 style={{ marginBottom: "30px" }}>About Me</h2>
          <p className={S.paragraph}>
            안녕하세요!
            <br /> 피카츄처럼 밝은 에너지를 가진 프론트엔드 개발자 고명한입니다
            ⚡️ <br />
            다양한 아르바이트 경험을 통해 얻은 커뮤니케이션 능력과 긍정적인
            태도로 에너자이저가 되어
            <br />팀 프로젝트에서는 팀원들을 응원하며 문제를 함께 해결해내는
            에너자이저 역할을 했습니다.
            <br /> 개발 시에는 UX 관점에서 사용자의 편의성을 우선시하며, <br />
            더 나은 프론트엔드 개발자가 되기 위해 노력하고 있습니다.
            <br />
            앞으로도 이 밝은 에너지로 협력과 성장을 이어가며 멋진 결과를
            만들어가고 싶습니다! 😊
          </p>
        </div>
      </div>
      <DownArrow />
    </div>
  );
}
