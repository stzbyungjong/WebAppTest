// 섹션 타입 → 렌더러 매핑 (registry 패턴).
//
// 새 기능(섹션) 추가 방법:
//   1) types/profile.ts 에 새 Section 인터페이스 + 유니온 추가
//   2) 이 폴더에 렌더러 컴포넌트 작성
//   3) 아래 registry 에 { type: 컴포넌트 } 한 줄 등록
//
// 알 수 없는 type 은 안전하게 무시된다 (renderSection 참고).

import type { ProfileSection } from "@/types/profile";
import TextSectionView from "./TextSection";
import FieldsSectionView from "./FieldsSection";
import LinksSectionView from "./LinksSection";
import TagsSectionView from "./TagsSection";

// 각 렌더러는 자신의 section 타입을 받지만, registry 에서는
// 공통적으로 ProfileSection 으로 다루므로 캐스팅 래퍼로 등록한다.
type Renderer = (props: { section: ProfileSection }) => React.ReactNode;

export const sectionRegistry: Record<string, Renderer> = {
  text: ({ section }) =>
    TextSectionView({ section: section as Extract<ProfileSection, { type: "text" }> }),
  fields: ({ section }) =>
    FieldsSectionView({ section: section as Extract<ProfileSection, { type: "fields" }> }),
  links: ({ section }) =>
    LinksSectionView({ section: section as Extract<ProfileSection, { type: "links" }> }),
  tags: ({ section }) =>
    TagsSectionView({ section: section as Extract<ProfileSection, { type: "tags" }> }),
};

/** type 에 맞는 렌더러를 찾아 렌더링. 없으면 null (무시). */
export function renderSection(section: ProfileSection): React.ReactNode {
  const Renderer = sectionRegistry[section.type];
  if (!Renderer) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[profile] 알 수 없는 섹션 type: "${section.type}" — 무시됨`);
    }
    return null;
  }
  return Renderer({ section });
}
