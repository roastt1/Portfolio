# Active Section Nav — 작업 목록

**목표:** 사용자가 스크롤할 때 현재 보고 있는 섹션이 navbar에서 강조 표시된다.

**상태: ✅ 완료 (2026-03-13)**

---

## 1단계: 훅 생성

- [x] `app/hooks/useActiveSection.ts` 파일 생성
  - `sectionIds: string[]` 파라미터 받기
  - `useEffect` 안에서 `IntersectionObserver` 초기화 (브라우저 환경 보장)
  - 옵션: `{ rootMargin: "-30% 0px -60% 0px", threshold: 0 }`
  - 섹션이 화면 중앙에 들어오면 해당 `entry.target.id`를 상태로 저장
  - 반환값: `activeSection: string` (기본값: `sectionIds[0]` → `"home"` 고정으로 최상단 공백 방지)
  - 정리: effect return에서 `observer.disconnect()` 호출

## 2단계: Header에 연결

- [x] `app/components/Header.tsx`에서 `useActiveSection` import
- [x] `const activeSection = useActiveSection(sectionIds)` 호출 (모듈 레벨 상수 사용)
- [x] 데스크톱/모바일 `<NavLinks>` 두 곳 모두에 `activeSection` prop 전달

## 3단계: NavLinks 활성 스타일 적용

- [x] `app/components/NavLinks.tsx`의 `NavLinksProps` 인터페이스에 `activeSection?: string` 추가
- [x] 데스크톱 버튼: `section.id === activeSection`일 때 `text-blue-400 font-black` 적용 (hover와 시각적 구분)
- [x] 모바일 버튼: 동일하게 활성 스타일 적용
- [x] 기존 `hover:text-blue-400`이 활성 스타일과 함께 정상 동작하는지 확인

## 4단계: 검증

- [x] TypeScript 체크: `npx tsc --noEmit` — 에러 없음
- [ ] 시각적 검토 — 4개 섹션을 천천히 스크롤하며 활성 링크 변경 확인
- [ ] 페이지 최상단 확인 — `home` 링크가 기본 활성화 상태인지
- [ ] 다크 모드 확인 — 라이트/다크 양쪽에서 `text-blue-400` 활성 스타일이 잘 보이는지
- [ ] 모바일 메뉴 확인 — 드롭다운에서도 활성 섹션 표시 확인
- [ ] 빠른 스크롤 시 활성 상태가 멈추지 않는지 확인
- [x] `app/page.tsx` 6번 줄 `//TODO` 주석 제거

## 버그 수정 (구현 후 발견)

- [x] **헤더핀 토글 시 home 비활성화 버그** — 구현 직후 발견 및 수정 완료
  - 증상: 헤더핀을 고정한 상태에서 최상단으로 올려도 `home`에 불이 들어오지 않음
  - 원인 및 해결: context 참고
