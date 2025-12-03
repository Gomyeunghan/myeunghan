export interface PortfolioData {
  title: string;
  img: string;
  team: string;
  period: string;
  explanation: string;
  stack: string[];
  description: string;
  point: string[];
  link: string[]; // [github, site] 순서
  preview: string[];
}

export type PortfolioList = PortfolioData[];
