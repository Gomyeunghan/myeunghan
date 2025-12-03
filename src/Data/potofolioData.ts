export const potofolioData = [
  {
    title: "포켓몬도감",
    img: "/images/image.png",
    team: "persnol",
    period: "2024.10.01~2024.11.01",
    explanation: "포켓몬api를 활용한 포켓몬도감 ",
    stack: ["next", "react", "module", "type"],
    description:
      "포켓몬 API를 활용한 도감 프로젝트입니다. 검색 기능을 통해 원하는 포켓몬을 찾아 상세 페이지로 이동할 수 있으며, 마우스 움직임에 반응하는 인터랙티브한 카드 애니메이션을 구현했습니다.",

    point: [
      "포켓몬 API 연동 및 데이터 페칭",
      "검색 기능을 통한 포켓몬 필터링 및 페이지 이동",
      "CSS를 활용한 마우스 호버 인터랙션 구현",
      "반응형 웹 디자인으로 모바일/태블릿/PC 대응",
    ],
    link: ["/", "/"],
    preview: ["pokemon1.png", "pokemon2.png"],
  },
  {
    title: "파티구함",
    img: "/images/partymain.png",

    team: "team",
    period: "2024.08.26 ~ 2024.09.23",
    explanation: "내주변 스터디 모집 플렛폼 ",
    stack: ["react", "module", "supabase"],
    description:
      "자유로운 스터디 커뮤니케이션 서비스를 통해 누구나 쉽게이용할 수 있는 서비스를 제공하는 플레폼입니다.",
    point: [
      "채팅: 사용자들간의 개인 채팅으로 학습 내용을 의논할수 있음",
      "게시판 : 사용자끼리 궁금한점 을 소통할수 있는 게시판",
      "스터디 참가 : 위치 기반서비스로 자신 주변 스터디에 참가할수 있는 기능",
      "스터디모집 : 위치 기반 서비스로 자신의 주변(동단위) 스터디 모집글 작성",
      "ID:test1@test.com PW:Test123!",
    ],
    link: [
      "https://github.com/Gomyeunghan/we-are-final-family",
      "https://we-are-final-family-bay.vercel.app/",
    ],
    preview: ["party2.png", "party3.png", "party4.png", "party5.png"],
  },
  {
    title: "TAING(티빙클론코딩)",
    img: "/images/taing.png",

    team: "team",
    period: "2024.07.05 ~ 2024.07.19",
    explanation: "4명의 팀원으로 진행된 티빙 클론코딩 ",
    stack: ["js", "sass", "html"],
    description:
      "티빙 클론코딩은 저와팀 원 4명이 함께 진행한 첫 팀 프로젝트로, 협업과 기초적인 프로젝트 관리 경험을 쌓기 위해 진행한 과제입니다. 처음 팀 프로젝트를 진행하다 보니 시작 단계에서 어려움을 겪었지만, 이를 해결하기 위해 철저한 계획 수립과 역할 분담을 통해 문제를 극복할 수 있었습니다.",
    point: [
      "창 크기 대응: 상단 슬라이드는 반응형으로 설계되어, 창 크기가 변할 때 슬라이드 이미지도 자동으로 변경됩니다.",
      "이미지 경로 업데이트: 스와이퍼 초기화 함수와 이미지 경로 업데이트 함수를 활용하여, 창 크기 변경 시 데스크탑과 모바일 환경에 맞춰 적절한 이미지가 로드되도록 구현하였습니다.",
      "회원가입 페이지 구현: 회원가입 시 입력된 값이 포함된 form 데이터를 생성합니다.",
      "스와이퍼 슬라이드 기능:랜딩 페이지는 포켓베이스에 저장된webp 형식의 이미지 데이터를 비동기적으로 불러옵니다.",
    ],
    link: [
      "https://github.com/Gomyeunghan/5jorago-vanilla-project",
      "https://5joragotaing.netlify.app/",
    ],
    preview: ["taing.png"],
  },
  {
    title: "Portfolio",
    img: "/images/portfolio.png",

    team: "persnol",
    period: "2024.12.31 ~ 2025.ing",
    explanation: "명한이의 포토폴리오",
    stack: ["next", "module", "react"],
    description: "프론트엔드 포토폴리오",
    point: [
      "Next.Js 를 활용해 seo를 최적화 하여 개발",
      "타입스크립트를 활용한 안정적인 타입으로 개발",
      "FramerMotin 을 사용해 카드애니메이션 구현",
      "moveScroll 커스텀hook 을 만들어서 버튼 클릭시 해당페이지로 자동스크롤 되는 기능 사용",
      "zustand 를 활용해 프로젝트의 전역상태를 관리하였습니다.",
    ],
    link: [
      "https://github.com/Gomyeunghan/5jorago-vanilla-project",
      "https://5joragotaing.netlify.app/",
    ],
    preview: ["portfolio.png"],
  },
];
