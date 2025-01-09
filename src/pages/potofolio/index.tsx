import PotofolioCard from "@/components/potfolioCard";
import S from "./potofolio.module.css";
import DetailPotfolio from "@/components/DetailPotfolio";
import { useEffect, useRef, useState, MouseEvent } from "react";
import { potofolioData } from "@/Data/potofolioData";
import { potofolioDataType } from "@/type/potofolioType";

export default function Potofolio() {
  const [isDialog, setDialog] = useState(false);
  const [potofolio, setpotofolio] = useState<potofolioDataType>({
    title: "",
    team: "",
    period: "",
    explanation: "",
    description: "",
    stack: [],
    point: [],
    preview: [],
  });
  const dialogRef = useRef<HTMLDialogElement>(null);

  const showDialog = (index: number) => {
    setpotofolio(potofolioData[index]);
    console.log(potofolio);

    dialogRef.current?.showModal();
    setDialog(true);
  };

  const closeDialog = (event: MouseEvent<HTMLDivElement>) => {
    if (dialogRef.current === event.target) {
      console.log("Close Dialog");
      dialogRef.current?.close();
      setDialog(false);
    }
  };

  useEffect(() => {
    if (isDialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  return (
    <>
      <div className={S.container} onClick={closeDialog}>
        <h2 className={S.title}>Potofolio</h2>
        <PotofolioCard onCardClick={showDialog} potofolioData={potofolioData} />
        <DetailPotfolio ref={dialogRef} potofolioData={potofolio} />
      </div>
    </>
  );
}
