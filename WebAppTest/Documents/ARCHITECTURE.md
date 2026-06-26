# 폴더 구조 + 확장성 설계

## 스택
- Next.js (App Router) — `app/` 기반
- TypeScript
- CSS Modules — 컴포넌트별 `*.module.css`
- 프로필 데이터는 `data/profile.json` (코드 수정 없이 편집)

## 폴더 구조
```
app/
  layout.tsx          루트 레이아웃 + globals.css 로드
  page.tsx            홈 — profile.json 읽어 ProfileCard 렌더
  page.module.css     홈 레이아웃 스타일
  globals.css         전역 변수(라이트/다크) + 기본 스타일
components/
  ProfileCard.tsx     카드 전체 조립 (헤더 + 섹션들)
  ProfileAvatar.tsx   프로필 이미지 / fallback 아바타
  sections/
    registry.tsx      type → 렌더러 매핑 (확장 핵심)
    TextSection.tsx   type "text"
    FieldsSection.tsx type "fields"
    LinksSection.tsx  type "links"
    TagsSection.tsx   type "tags"
    Section.module.css 섹션 공통 스타일
types/
  profile.ts          Profile / Section 타입 정의
data/
  profile.json        ← 프로필 정보 (사용자 편집)
public/
  images/             ← 프로필 이미지 (사용자 추가)
```

## 확장성 설계 — registry 패턴
프로필 항목은 `profile.json` 의 `sections` 배열로 구성된다.
각 section 은 `type` 필드로 종류를 구분하고, `registry.tsx` 가 `type → 컴포넌트` 로 매핑해 렌더한다.
알 수 없는 `type` 은 안전하게 무시된다 (개발 모드에서 콘솔 경고).

### 새 기능(섹션) 추가 — 3단계
예: "경력(career)" 섹션 추가

1. **타입 정의** — `types/profile.ts`
   ```ts
   export interface CareerSection extends BaseSection {
     type: "career";
     items: { company: string; period: string }[];
   }
   // ProfileSection 유니온에 | CareerSection 추가
   ```

2. **렌더러 작성** — `components/sections/CareerSection.tsx`
   ```tsx
   import type { CareerSection } from "@/types/profile";
   export default function CareerSectionView({ section }: { section: CareerSection }) {
     return ( /* JSX */ );
   }
   ```

3. **registry 등록** — `components/sections/registry.tsx`
   ```ts
   career: ({ section }) =>
     CareerSectionView({ section: section as Extract<ProfileSection, { type: "career" }> }),
   ```

이후 `data/profile.json` 의 `sections` 에 `{ "type": "career", ... }` 추가하면 화면에 노출.

### 현재 지원 type
| type | 용도 | 데이터 |
|------|------|--------|
| `text`   | 자유 텍스트 (소개) | `body` |
| `fields` | 라벨-값 목록 (연락처 등) | `items: {label, value}[]` |
| `links`  | 링크 목록 | `items: {label, url}[]` |
| `tags`   | 태그/스킬 | `items: string[]` |

## 스타일 규칙
- 색상은 `globals.css` 의 CSS 변수 사용 (`--text`, `--accent`, `--card-bg` 등) → 라이트/다크 자동 대응.
- 컴포넌트 스타일은 같은 폴더의 `*.module.css` 에 둔다.
