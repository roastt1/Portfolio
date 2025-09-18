export const projectConstants = [
    {
        projectType: "개인",
        title: "포트폴리오 웹사이트",
        content: "Next.js와 Tailwind로 만든 개인 포트폴리오 웹",
        duration: "2025.06.08 ~ 진행중",
        images: [
            "/images/projects/portfolio.png",
            "/images/projects/portfolio.png",
            "/images/projects/portfolio.png",
        ],
        details: `이 프로젝트는 Next.js를 기반으로 제작되었으며,
            Tailwind CSS를 사용하여 반응형 디자인을 구현했습니다.
            주요 기능으로는 프로젝트 카드, 모달, 이미지 캐러셀 등이 포함되어 있습니다.
            사용자 친화적인 UI와 간결한 코드 구조를 목표로 하였습니다.`,
        contributions: `프로젝트 기획부터 개발, 디자인까지 모든 작업을 담당하였습니다.
            Next.js와 Tailwind를 활용하여 컴포넌트 기반 개발 방식을 적용했습니다.
            반응형 웹 구현과 최적화에도 중점을 두었습니다.`,
        troubleshooting: `[문제] 프로젝트 모달이 열려 있을 때 배경 화면이 스크롤되는 현상이 발생함  
            [해결] 모달 상태를 useState로 관리하고, 열릴 때 document.body.style.overflow를 'hidden'으로 설정해 배경 스크롤을 차단함`,
    },
    {
        projectType: "팀",
        title: "FITPLE - 핏플",
        content:
            "사이드프로젝트를 함께할 개발자, 디자이너, 기획자를 연결해주는 매칭 플랫폼",
        duration: "2025.04.07 ~ 2025.04.28",
        images: [
            "/images/projects/fitple.png",
            "/images/projects/fitple.png",
            "/images/projects/fitple.png",
        ],
        details: `사이드프로젝트를 함께할 개발자, 디자이너, 기획자를 연결해주는 매칭 플랫폼
    `,
        contributions: `메인페이지와 상세페이지, DB 설계 및 API 개발을 담당하였습니다.
             공통 컴포넌트 개발과 UX 개선에도 참여하였습니다.
            `,
        troubleshooting: "[문제] ",
    },
    {
        projectType: "팀",
        title: "GameChu - 겜추",
        content: "IGDB API 기반 게임 추천 및 커뮤니티 플랫폼",
        duration: "2025.05.09 ~ 진행중",
        images: [
            "/images/projects/gamechu.png",
            "/images/projects/game.png",
            "/images/projects/game.png",
        ],
        details: `겜추(GameChu)는 게이머를 위한 게임 추천 서비스와 커뮤니티 기능을 통합한 웹 플랫폼입니다.

            로튼토마토식 평점 시스템을 도입해 게임에 대한 객관적인 평가를 제공합니다.

            유저 간 1:1 논쟁(투기장) 기능으로 게임에 대한 다양한 관점을 공유하고 활동 점수(티어) 시스템을 통해 유저의 활발한 참여를 유도했습니다.

            husky를 활용하여 코드 품질을 유지하고, GitHub Actions를 통해 CI/CD 파이프라인을 구축하여 안정적인 배포 환경을 마련했습니다.
        `,
        contributions: `투기장(Arena) 상세 페이지 개발 전반 담당

            채팅, 투표 기능 UI/UX 설계 및 구현

            반응형 디자인 적용으로 다양한 화면 환경에서 최적화된 사용자 경험 제공

            Socket.IO를 활용한 실시간 채팅 기능 구현`,
        troubleshooting: `[문제] socket.io를 이용해 실시간 채팅을 구현하던 중, HTTPS 환경에서 클라이언트가 소켓 서버에 연결되지 않음 (CORS 에러 발생)  
            [원인] 서버와 클라이언트의 도메인/포트가 달라 기존 CORS 설정이 누락되어 있었음  
            [해결] 서버 측 socket.io를 초기화할 때 CORS 옵션을 추가하여 운영 도메인을 허용하도록 설정함
`,
    },
];
