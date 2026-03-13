# Active Section Nav — 계획서

## 요약

스크롤 시 현재 보고 있는 섹션을 navbar에서 강조 표시하는 기능 추가.
`app/page.tsx` 6번 줄 TODO 주석에서 출발.

## 현재 상태

- `Header.tsx`는 `NavLinks`에 `sections` 배열(`home`, `about`, `skills`, `projects`)을 전달
- `NavLinks.tsx`는 클릭 시 스크롤만 처리 — **활성 상태 없음**
- 섹션 이동은 동작하지만, 현재 위치를 navbar에서 시각적으로 알 수 없음
- `app/page.tsx`에 `<section id="home|about|skills|projects">` 형태로 섹션이 존재

## 변경 방향

### 접근법: 커스텀 훅 + 상태 전달

1. `useActiveSection` 훅 생성 — `IntersectionObserver`로 4개 섹션 관찰
2. `Header`에서 `activeSection` 상태를 `NavLinks`에 prop으로 전달
3. `NavLinks`가 각 버튼에 조건부 활성 스타일 적용

### 왜 scroll 이벤트 대신 IntersectionObserver?

- 성능이 더 좋음 — 브라우저 네이티브, 스크롤 이벤트 폴링 없음
- `Header.tsx`의 기존 스크롤 감지 로직과 충돌 없음
- `rootMargin`으로 "화면 중앙" 기준 정밀 감지 가능

## 구현 단계

### 1단계 — 훅 생성
`app/hooks/useActiveSection.ts` 생성:
- `sectionIds: string[]` 입력
- `rootMargin: "-30% 0px -60% 0px"` — 화면 중앙 10% 구간에서 활성화 (공백 구간 방지)
- 초기값을 첫 번째 sectionId(`"home"`)로 고정 — 페이지 최상단 진입 시 아무것도 활성화되지 않는 문제 방지
- `activeSection: string` 반환

### 2단계 — Header 연결
- `Header`에서 훅 호출
- `activeSection`을 `NavLinks`에 prop으로 전달

### 3단계 — NavLinks 스타일 적용
- `NavLinksProps`에 `activeSection?: string` 추가
- `section.id === activeSection`일 때 `text-blue-400 font-black` 적용 — hover(`text-blue-400`)와 시각적으로 구분되도록 굵기 추가
- 다크 모드에서 `text-blue-400` 가시성 확인

## 리스크 평가

| 리스크 | 가능성 | 대응 방법 |
|--------|--------|-----------|
| SSR에서 IntersectionObserver 미지원 | 낮음 | `useEffect` 내부에서만 초기화 |
| 섹션 전환 시 활성 상태 깜빡임 | 중간 | `rootMargin` 수치 조정 + smooth scroll 중 중간 섹션 감지 허용 (의도된 동작) |
| 모바일 메뉴에서 활성 상태 미반영 | 낮음 | 같은 `activeSection` prop 공유 |
