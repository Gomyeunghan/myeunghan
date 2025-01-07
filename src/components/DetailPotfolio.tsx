import { forwardRef } from "react";
import S from "./DetailPotfolio.module.css";
import { potofolioDataType } from "@/type/potofolioType";
import { CiLink } from "react-icons/ci";
import { BsFillPinAngleFill } from "react-icons/bs";

interface DetailPotfolioProps {
  potofolioData: potofolioDataType;
}

const DetailPotfolio = forwardRef<HTMLDialogElement, DetailPotfolioProps>(
  ({ potofolioData }, ref) => {
    return (
      <dialog className={S.container} ref={ref}>
        <div className={S.box}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <h3>{potofolioData.title}</h3>
            <div
              style={{ display: "flex", gap: "10px", justifyContent: "center" }}
            >
              {potofolioData.stack.map((item, index) => {
                console.log(item);
                return (
                  <span
                    className={item}
                    key={index}
                    style={{ display: "block" }}
                  ></span>
                );
              })}
            </div>
            <span>{potofolioData.period}</span>
            <p style={{ textAlign: "center" }}>{potofolioData.description}</p>
            <div style={{ display: "flex", gap: "50px", margin: "50px 0px" }}>
              <a
                style={{ display: "flex" }}
                href="https://github.com/Gomyeunghan/pokemon"
                target="_blank"
              >
                <span className="github"></span>깃헙 바로가기
              </a>
              <a
                style={{ display: "flex" }}
                href="https://pokemon-alpha-olive.vercel.app/?page=0&pageGroup=1"
                target="_blank"
              >
                <CiLink style={{ width: "24px", height: "24px" }} />
                사이트 바로가기
              </a>
            </div>
          </div>
          <div style={{ width: "70%", border: "1px solid gray" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            {potofolioData.team === "persnol" ? (
              <h3>개인프로젝트</h3>
            ) : (
              <h3>팀 프로젝트</h3>
            )}

            <ul>
              <h4>
                <BsFillPinAngleFill style={{ color: "133E87" }} />
                주요 기능 및 특징
              </h4>
              {potofolioData.point.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <div style={{ paddingTop: "100px" }}>
              <h4>미리보기</h4>
              <span>이미지를 클릭하면 크게볼수 있습니다.</span>
              <div style={{ display: "flex" }}>
                {potofolioData.preview.map((item, index) => {
                  return <img src={`/images/${item}`} alt="" key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </dialog>
    );
  }
);

DetailPotfolio.displayName = "DetailPotfolio";

export default DetailPotfolio;
