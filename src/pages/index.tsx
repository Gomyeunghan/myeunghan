// Home.tsx
import About from "./about";
import Potofolio from "./potofolio";
import Skil from "./skil";

interface HomeProps {
  refs?: {
    aboutRef: React.RefObject<HTMLDivElement>;
    skilRef: React.RefObject<HTMLDivElement>;
    portfolioRef: React.RefObject<HTMLDivElement>;
  };
}

export default function Home({ refs }: HomeProps) {
  return (
    <div>
      <div ref={refs?.aboutRef}>
        <About />
      </div>
      <div ref={refs?.skilRef}>
        <Skil />
      </div>
      <div ref={refs?.portfolioRef}>
        <Potofolio />
      </div>
    </div>
  );
}
