// 프로필 데이터 타입 정의.
// 새 기능 추가 시 여기에 새 Section 타입을 추가하고,
// components/sections 에 렌더러를 만든 뒤 registry 에 등록한다.

/** 모든 섹션 공통 필드 */
export interface BaseSection {
  /** 섹션 종류. registry 의 key 와 일치해야 함 */
  type: string;
  /** 화면 표시용 제목 (선택) */
  title?: string;
}

/** 자유 텍스트 (자기소개 등) */
export interface TextSection extends BaseSection {
  type: "text";
  body: string;
}

/** 라벨-값 목록 (연락처, 기본정보 등) */
export interface FieldsSection extends BaseSection {
  type: "fields";
  items: { label: string; value: string }[];
}

/** 링크 목록 (SNS, 웹사이트 등) */
export interface LinksSection extends BaseSection {
  type: "links";
  items: { label: string; url: string }[];
}

/** 태그/스킬 목록 */
export interface TagsSection extends BaseSection {
  type: "tags";
  items: string[];
}

/**
 * 알려진 모든 섹션의 유니온.
 * 새 섹션 타입을 만들면 여기에 추가한다.
 * (registry 는 알 수 없는 type 도 안전하게 무시하도록 처리됨)
 */
export type ProfileSection =
  | TextSection
  | FieldsSection
  | LinksSection
  | TagsSection;

/** 최상위 프로필 데이터 */
export interface Profile {
  /** 이름 */
  name: string;
  /** 한 줄 소개 / 직함 */
  headline?: string;
  /** 프로필 이미지 경로 (public 기준). 예: "/images/profile.jpg" */
  imagePath?: string;
  /** 확장 가능한 섹션 목록 */
  sections: ProfileSection[];
}
