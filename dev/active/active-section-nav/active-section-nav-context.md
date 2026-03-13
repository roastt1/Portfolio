# Active Section Nav — Context

**Last updated: 2026-03-13 | 상태: 구현 완료, 시각적 검증 미완**

---

## Key Architectural Decisions

### IntersectionObserver over scroll listener
`Header.tsx` already uses a `scroll` event listener for hide/show behavior. Adding another scroll listener for active detection would compound re-renders. `IntersectionObserver` fires only on entry/exit, avoiding this.

### Custom hook in `app/hooks/`
The project had no `hooks/` directory — this is the first. It keeps browser API logic out of components and makes the hook independently testable.

### State lives in `Header.tsx`
`Header` is the only consumer of `activeSection`. No global state (context/zustand) needed — simple prop drilling from `Header` → `NavLinks` is correct here.

### sectionIds를 모듈 레벨 상수로 분리 (버그 수정에서 도출)
처음엔 `sections.map(s => s.id)`를 컴포넌트 내부에서 `useActiveSection`에 직접 전달했다.
`sections`는 모듈 레벨 상수이므로 `sectionIds`도 컴포넌트 외부로 뽑아서 참조를 안정화했다.

---

## Critical Files and Their Roles

| File | Role | Change? |
|------|------|---------|
| `app/page.tsx` | Renders `<section id="...">` wrappers — these are the observed targets | TODO 주석 제거 |
| `app/components/Header.tsx` | Owns scroll state + renders NavLinks | 훅 호출, prop 전달, sectionIds 모듈 레벨 분리 |
| `app/components/NavLinks.tsx` | Renders nav buttons | `activeSection` prop + 활성 스타일 추가 |
| `app/hooks/useActiveSection.ts` | New hook — encapsulates IntersectionObserver logic | 신규 생성 |

---

## 버그: 헤더핀 토글 시 home 비활성화

### 증상
헤더핀(`isPinned`)을 토글한 뒤 최상단으로 올려도 `home` 링크에 활성 스타일이 적용되지 않음.

### 근본 원인
1. `isPinned` 상태 변경 → `Header` 리렌더
2. `useActiveSection(sections.map(s => s.id))` — `map()`이 매 렌더마다 **새 배열 참조** 생성
3. `useEffect([sectionIds])` 의존성이 변경된 것으로 감지 → 클린업(disconnect) + 재설정 반복
4. IntersectionObserver는 **교차 상태 변화**가 있을 때만 콜백을 발화 → 재생성 직후 이미 교차 중인 섹션은 이벤트 미발화 → `activeSection` 갱신 누락

### 수정 내용
- `Header.tsx`: `sectionIds`를 모듈 레벨 상수로 분리 (`const sectionIds = sections.map(s => s.id)`) → 참조 안정화
- `useActiveSection.ts`: `useRef`로 최신 `sectionIds` 유지, `useEffect` 의존성을 `[]`로 변경 → 마운트 시 한 번만 옵저버 생성

### 교훈
IntersectionObserver를 커스텀 훅으로 감쌀 때, 훅 파라미터로 받는 배열이 매 렌더마다 새 참조면 옵저버가 계속 재생성된다. `useRef` 패턴 또는 상위 컴포넌트에서 안정적인 참조를 전달하는 방식 중 하나를 반드시 사용할 것.

---

## Dependencies and Constraints

- No new packages needed — `IntersectionObserver` is native browser API
- Must use `"use client"` in any file using hooks/browser APIs
- `NavLinks.tsx`는 `"use client"` 없이 유지 — props를 받아 렌더만 하므로 서버 컴포넌트로 사용 가능
- `Header.tsx` already has `"use client"` ✓
- `useActiveSection.ts` has `"use client"` ✓

---

## 최종 구현 패턴

```ts
// useActiveSection.ts — 핵심 패턴
const sectionIdsRef = useRef(sectionIds);
sectionIdsRef.current = sectionIds;

useEffect(() => {
    const observer = new IntersectionObserver(callback, {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
    });
    sectionIdsRef.current.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
    return () => observer.disconnect();
}, []); // 마운트 시 한 번만
```

```tsx
// Header.tsx — sectionIds를 모듈 레벨에 정의
const sections = [...];
const sectionIds = sections.map(s => s.id); // 참조 안정화

export default function Header() {
    const activeSection = useActiveSection(sectionIds);
    // ...
}
```

```tsx
// NavLinks.tsx — 활성 스타일
className={`text-lg font-black transition hover:text-blue-400 ${isActive ? "text-blue-400" : ""}`}
```

---

## 남은 작업
시각적 검증(4단계 체크리스트)이 남아 있으나 코드 구현 자체는 완료.
`npm run dev`로 직접 확인 필요.
