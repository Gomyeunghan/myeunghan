import { forwardRef, useState } from "react";
import S from "./DetailPotfolio.module.css";
import { PortfolioData } from "@/type/potofolioType";
import { CiLink } from "react-icons/ci";
import { BsFillPinAngleFill } from "react-icons/bs";
import { usePageStore } from "@/provider/StoreProvider";
import ClickPreView from "./ClickPreView";

interface DetailPotfolioProps {
  potofolioData: PortfolioData;
}

const DetailPotfolio = forwardRef<HTMLDialogElement, DetailPotfolioProps>(
  ({ potofolioData }, ref) => {
    const { setDialog } = usePageStore((state) => state);

    const closeDialog = () => {
      if (ref && "current" in ref) {
        ref.current?.close();
        setDialog(false);
      }
    };
    const [isImgClick, setIsImgClick] = useState(false);
    const [clickImg, setClickImg] = useState("");

    return (
      <div>
        <dialog className={S.container} ref={ref}>
          <div className={S.btn} onClick={closeDialog}>
            닫기
          </div>
          <div className={S.box}>
            <div className={S.box_container}>
              <h3>{potofolioData.title}</h3>
              <div className={S.stackBoxContainer}>
                {potofolioData.stack.map((item, index) => {
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
              <p style={{ textAlign: "center", margin: "0 50px" }}>
                {potofolioData.description}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "50px",
                  margin: "50px 0px",
                  justifyContent: "center",
                }}
              >
                <a
                  style={{ display: "flex" }}
                  href={potofolioData.link[0]}
                  target="_blank"
                >
                  <span className="github"></span>깃헙 바로가기
                </a>
                <a
                  style={{ display: "flex" }}
                  href={potofolioData.link[1]}
                  target="_blank"
                >
                  <CiLink style={{ width: "24px", height: "24px" }} />
                  사이트 바로가기
                </a>
              </div>
            </div>
            <div
              style={{
                width: "80%",
                border: "1px solid gray",
                margin: "0 auto",
              }}
            ></div>
            <div className={S.project}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {potofolioData.team === "personal" ? (
                  <h3>개인프로젝트</h3>
                ) : (
                  <h3>팀 프로젝트</h3>
                )}
              </div>
              <ul>
                <h4>
                  <BsFillPinAngleFill
                    style={{
                      color: "133E87",
                    }}
                  />
                  주요 기능 및 특징
                </h4>
                {potofolioData.point.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
              <div
                style={{
                  paddingTop: "100px",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <h4>미리보기</h4>
                <span>이미지를 클릭하면 크게볼수 있습니다.</span>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: "50px ",
                    gap: "10px ",
                  }}
                >
                  {potofolioData.preview.map((item, index) => {
                    return (
                      <div key={index}>
                        <img
                          src={`/images/${item}`}
                          onClick={() => {
                            setIsImgClick(!isImgClick);
                            setClickImg(`/images/${item}`);
                          }}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {isImgClick ? (
              <ClickPreView
                src={clickImg}
                onClick={() => {
                  setIsImgClick(!isImgClick);
                  setClickImg(``);
                }}
              />
            ) : null}
          </div>
        </dialog>
      </div>
    );
  }
);

DetailPotfolio.displayName = "DetailPotfolio";

export default DetailPotfolio;
