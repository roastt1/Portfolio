export const projectConstants = [
    {
        projectType: "개인",
        title: "포트폴리오 웹사이트",
        content: "Next.js와 Tailwind로 만든 개인 포트폴리오 웹",
        duration: "2025.06.08 ~ 진행중",
        images: [
            "/images/projects/webPortfolio_1.png",
            "/images/projects/webPortfolio_2.png",
            "/images/projects/webPortfolio_3.png",
            "/images/projects/webPortfolio_4.png",
            "/images/projects/webPortfolio_5.png",
            "/images/projects/webPortfolio_6.png",
        ],
        link: "http://joonseon-portfolio.vercel.app",
        details: `이 프로젝트는 Next.js를 기반으로 제작되었으며,
            Tailwind CSS를 사용하여 반응형 디자인을 구현했습니다.
            주요 기능으로는 프로젝트 카드, 모달, 이미지 캐러셀 등이 포함되어 있습니다.
            AOS 라이브러리를 활용하여 스크롤 애니메이션을 적용했습니다.
            반응형 UI와 원활한 사용자 경험을 제공하는 데 중점을 두었습니다. `,
        contributions: `프로젝트 기획부터 개발, 디자인까지 모든 작업을 담당했습니다. `,
        troubleshooting: [
            {
                problem: `프로젝트 모달이 열려 있을 때 배경 화면이 스크롤되는 현상이 발생했습니다.`,
                cause: `모달이 화면 위에 표시되더라도, 브라우저의 기본 스크롤 동작이 여전히 활성화되어 있었기 때문이었습니다.
                    즉, 모달을 띄워도 body 요소의 스크롤이 비활성화되지 않아 배경이 함께 움직이는 문제가 발생했습니다.`,
                solution: `모달 상태를 useState로 관리하고, 열릴 때 document.body.style.overflow를 'hidden'으로 설정해 배경 스크롤을 차단했습니다.`,
            },
            {
                problem: `AOS 애니메이션은 적용되어 있었지만, 기존 포트폴리오 구조에서는 눈에 잘 띄지 않았습니다.`,
                cause: `단일 페이지 링크 이동 방식에서는 초기 렌더링 시 요소가 이미 화면 안에 존재하거나, 화면 진입 시점이 잘 드러나지 않아 AOS 애니메이션 효과가 미미하게 보였습니다.`,
                solution: `섹션 이동 방식을 스크롤 기반으로 변경하고 scrollIntoView로 부드럽게 이동하도록 구현하여,
                    기존 AOS 애니메이션과 함께 시각적 효과가 확실히 드러나도록 개선했습니다.`,
            },
            {
                problem: `react-slick을 이용한 이미지 캐러셀 구현 중, 다음 슬라이드를 보기 위해 드래그를 하면 이미지 확대 모달이 의도치 않게 동시에 실행되는 UX 충돌 문제가 발생했습니다.`,
                cause: `브라우저의 표준 클릭 메커니즘 때문이었습니다. mousedown과 mouseup이 동일 요소 내에서 발생하면, 
                    그사이 드래그 동작이 포함되어 있어도 클릭 이벤트가 트리거되어 중복으로 기능이 호출되는 것이 원인이었습니다.`,
                solution: `onClick 대신 좌표 변화를 직접 감지하는 로직을 구현했습니다. 
                    useRef를 활용해 마우스가 눌린 시작 좌표를 기록하고, 뗄 때의 이동 거리를 계산했습니다. 
                    미세한 손떨림을 고려하여 이동 거리가 5px 미만일 때만 클릭으로 간주하고 그 이상은 드래그로 판정하도록 제어했습니다. 
                    이를 통해 드래그와 클릭 동작을 명확히 구분하여 UX 충돌 문제를 해결했습니다.`,
            },
            {
                problem: `Next.js 환경에서 다크모드 적용 시, 페이지가 로드될 때 찰나의 순간 동안 배경색이 흰색에서 검은색으로 깜빡이며 바뀌는 FOUC 현상이 발생했습니다.`,
                cause: `클라이언트 사이드에서 초기 테마 상태를 결정하기 때문이었습니다. 브라우저가 LocalStorage나 시스템 설정을 확인하여 테마를 적용하기 전에 이미 HTML 렌더링이 시작되어, 기본값인 라이트 모드가 먼저 노출되는 것이 원인이었습니다.`,
                solution: `Next.js의 'RootLayout' 내부에 즉시 실행 함수 형태의 'Blocking Script'를 주입하여 해결했습니다. 
                    브라우저가 <body>를 렌더링하기 전, <head> 태그 안에서 'localStorage'와 'matchMedia'를 통해 사용자의 테마 설정을 즉시 파악하도록 로직을 구성했습니다. 
                    이를 통해 DOM이 화면에 그려지기 직전에 <html> 태그에 'dark' 클래스를 선제적으로 주입함으로써, 테마 전환 시 발생하는 깜빡임 현상을 원천적으로 차단하고 매끄러운 UX를 구현했습니다.`,
            },
        ],
    },
    {
        projectType: "팀",
        title: "FITPLE - 핏플",
        content:
            "사이드프로젝트를 함께할 개발자, 디자이너, 기획자를 연결해주는 매칭 플랫폼",
        duration: "2025.04.07 ~ 2025.04.28",
        images: [
            "/images/projects/fitple.png",
            "/images/projects/fitple_1.png",
            "/images/projects/fitple_2.png",
            "/images/projects/fitple_3.png",
        ],
        details: `사이드프로젝트를 함께할 개발자, 디자이너, 기획자를 연결해주는 매칭 플랫폼입니다.
            사용자들은 자신의 프로필을 작성하거나, 프로젝트를 등록하여 팀원을 모집할 수 있습니다.
            사용자는 프로젝트에 직접 지원할 수도 있으며, 다른 사용자의 프로필을 보고 자신의 프로젝트에 제안을 보낼 수도 있습니다.
            또한 관심 있는 프로젝트를 북마크하여 나중에 다시 확인할 수 있으며, 
            프로젝트 팀이 결성되면 팀원들과 간단히 소통할 수 있는 채팅 기능도 포함되어 있습니다. `,
        contributions: `메인 페이지와 상세 페이지에서 필요한 주요 API를 설계하고 구현하였으며, 데이터 조회, 정렬, 필터링 등의 로직을 개발했습니다.
            DB 설계는 팀원들과 함께 협의하여 진행하였으며, 데이터 정규화 및 관계 설정을 통해 효율적인 쿼리 구조를 구축했습니다.
            버튼, 카드 등의 공통 컴포넌트를 개발하여 코드 재사용성을 높였고, 사용자 피드백을 반영해 UI/UX 개선 작업에도 기여했습니다. `,
        troubleshooting: [
            {
                problem: `프로젝트 매칭 기능을 구현하는 과정에서, 동일한 사용자가 같은 게시글에 여러 번 지원하거나 제안을 보내는 경우가 발생했습니다.
                    또한, 사용자가 자신의 게시글에 스스로 지원하거나 제안하는 비정상적인 동작도 가능했습니다.
                    이로 인해 DB에 중복 데이터가 생성되고, UX적으로도 혼란을 주는 문제가 있었습니다.`,
                cause: `기존 로직에서는 지원(Apply)과 제안(Offer)을 생성할 때 동일 사용자가 
                    이미 해당 게시글에 요청을 보냈는지 확인하는 검증 로직이 없었습니다.
                    또한, 사용자가 자신의 게시글에 대해 지원하거나 제안하는 것을 막는 조건도 없었습니다.`,
                solution: `지원과 제안을 생성하기 전, 한 사용자의 글에 중복으로 지원하거나 제안하는 것과
                    자신의 글에 지원하거나 제안하는 것을 막는 예외처리를 구현했습니다.`,
            },
        ],
    },
    {
        projectType: "팀",
        title: "GameChu - 겜추",
        content:
            "IGDB API 기반 게임 평점 · 리뷰 · 투기장까지 지원하는 종합 게이머 플랫폼",
        duration: "2025.05.09 ~ 진행중",
        images: [
            "/images/projects/gamechu.png",
            "/images/projects/gamechu_1.png",
            "/images/projects/gamechu_2.png",
            "/images/projects/gamechu_3.png",
            "/images/projects/gamechu_4.png",
            "/images/projects/gamechu_5_2.png",
            "/images/projects/gamechu_7.png",
            "/images/projects/gamechu_8.png",
        ],
        link: "https://gamechu.com",
        details: `겜추(GameChu)는 게이머를 위한 게임 리뷰 서비스와 투기장 기능을 통합한 웹 플랫폼입니다.
            로튼토마토식 평점 시스템을 도입해 게임에 대한 객관적인 평가를 제공합니다.
            유저 간 1:1 논쟁(투기장) 기능으로 게임에 대한 다양한 관점을 공유하고 활동 점수(티어) 시스템을 통해 유저의 활발한 참여를 유도했습니다.
            클린 아키텍처 기반의 구조를 적용하여 유지보수성과 확장성을 높였으며,
            husky를 활용하여 코드 품질을 유지하고, GitHub Actions를 통해 CI/CD 파이프라인을 구축하여 안정적인 배포 환경을 마련했습니다.`,
        contributions: `투기장(Arena) 상세 페이지의 전반적인 개발을 담당했습니다.
            채팅 및 투표 기능의 UI/UX를 직접 설계하고 구현하였으며 사용자 경험을 고려한 인터랙션과 화면의 흐름을 구성했습니다.
            반응형 디자인을 적용하여 다양한 기기와 화면 크기의 환경에서도 최적화된 사용자 경험을 제공했습니다.
            Socket.IO를 활용한 실시간 채팅 기능을 구현하여 사용자 간 원활한 소통을 지원했습니다. 
            팀원들과 주기적인 회의를 통해 지속적으로 소통하며 기능 구현 및 디자인 개선 방향을 논의하고, 피드백을 주고받으며 프로젝트 완성도를 높였습니다.
            랜딩 페이지 및 헤더 등의 디자인과 기능을 직접 수정하고 개선하여, 전체적인 시각적 일관성과 완성도를 향상시켰습니다. `,
        troubleshooting: [
            {
                problem: `socket.io를 이용해 실시간 채팅 기능을 구현하던 중, HTTPS 환경에서 클라이언트가 소켓 서버에 연결되지 않는 문제가 발생했습니다.  
                    (CORS 관련 오류 메시지가 나타났습니다.)`,
                cause: `서버와 클라이언트가 서로 다른 도메인을 사용하고 있었는데,  
                    이때 필요한 CORS 설정이 서버 측에 누락되어 있었습니다.`,
                solution: `socket.io 초기화 시 CORS 옵션을 추가하여 운영 중인 클라이언트 도메인을 허용했습니다.  
                    그 결과 HTTPS 환경에서도 정상적으로 소켓 연결이 이루어졌습니다.`,
            },
        ],
    },
];
