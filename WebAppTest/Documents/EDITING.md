# 프로필 편집 방법 (코드 수정 불필요)

## 1. 프로필 이미지
- 위치: `public/images/`
- 기본 파일명: `public/images/profile.jpg`
- 다른 파일명/확장자를 쓰려면 `data/profile.json` 의 `imagePath` 수정.
  - 예: `"imagePath": "/images/me.png"`
- 경로는 `public` 기준이므로 항상 `/images/...` 로 시작.
- 이미지를 넣지 않으면 이름 첫 글자 아바타가 자동 표시됨.

## 2. 프로필 정보
- 위치: `data/profile.json`
- 코드 수정 없이 이 파일만 편집하면 됨.

### 최상위 필드
```json
{
  "name": "이름",
  "headline": "한 줄 소개 / 직함",
  "imagePath": "/images/profile.jpg",
  "sections": [ ... ]
}
```

### 섹션(sections) — 표시할 항목들
각 항목은 `type` 으로 종류를 정한다.

```json
{ "type": "text",   "title": "소개", "body": "자기소개 텍스트" }

{ "type": "fields", "title": "기본 정보",
  "items": [ { "label": "이메일", "value": "you@example.com" } ] }

{ "type": "links",  "title": "링크",
  "items": [ { "label": "GitHub", "url": "https://github.com/" } ] }

{ "type": "tags",   "title": "스킬",
  "items": ["Next.js", "TypeScript"] }
```

- `title` 은 선택. 생략하면 제목 없이 내용만 표시.
- 순서를 바꾸면 화면 순서도 바뀜. 항목을 지우면 화면에서도 사라짐.
- 새로운 `type` 의 섹션을 추가하려면 코드 작업 필요 → `ARCHITECTURE.md` 의 "새 기능 추가 3단계" 참고.

## 편집 후 확인
- 개발 서버(`npm run dev`) 실행 중이면 새로고침으로 확인. → `SETUP.md`
- JSON 문법 주의: 마지막 항목 뒤 쉼표(,) 금지, 따옴표는 큰따옴표(").
