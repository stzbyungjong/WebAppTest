---
name: wrap-up
description: 개발 마무리 스킬. 이번 세션에 개발/변경한 내용을 적절한 Markdown 문서로 정리하고(Documents/ 폴더), 기존 md(CLAUDE.md 문서 목록 등)를 업데이트한 뒤 git 커밋까지 수행한다. 사용자가 "마무리", "정리하고 커밋", "wrap up", "문서화하고 커밋"이라고 할 때 사용.
---

# wrap-up — 개발 마무리 + 문서화 + 커밋

이번 작업 내용을 문서로 정리하고 기존 문서를 갱신한 뒤 커밋한다.

## 문서 관리 규칙 (이 프로젝트 약속)
- 개발하며 갱신되는 상세 문서는 모두 `Documents/` 폴더에 둔다.
- `CLAUDE.md` 에는 개요 + 사전 규칙 + Documents 문서 목록만 둔다. 상세 내용은 적지 않는다.
- 기존 Documents 문서: `SETUP.md`(실행), `ARCHITECTURE.md`(구조/확장), `EDITING.md`(편집).

## 절차

### 1. 변경 내용 파악
- `git status` 와 `git diff` (스테이징 전/후 모두) 로 이번 세션 변경 파일/내용 확인.
- 무엇이 추가/수정/삭제됐는지 요약.

### 2. 문서 작성/갱신
변경 성격에 맞는 곳에 반영:
- 새 기능/구조 변경 → `Documents/ARCHITECTURE.md` 갱신.
- 실행/스크립트 변경 → `Documents/SETUP.md` 갱신.
- 프로필 데이터/편집 방식 변경 → `Documents/EDITING.md` 갱신.
- 기존 문서에 안 맞는 새 주제면 → `Documents/` 에 새 md 생성 (명확한 파일명, 예: `DEPLOY.md`).
- 새 md 를 만들었으면 **`CLAUDE.md` 의 "Documents 목록"에 한 줄 추가** (파일명 + 한 줄 설명만).
- 문서 내용은 한국어, 간결하게. 코드 예시는 실제 코드와 일치시킬 것.

규칙: CLAUDE.md 에는 상세 내용 금지 — 목록/포인터만. 상세는 Documents 안에.

### 3. 검증 (해당되면)
- 코드 변경이 있었으면 `npm run build` 로 빌드 통과 확인.

### 4. 커밋
- 관련 파일 스테이징.
- Conventional Commits 형식의 한국어/영어 커밋 메시지 작성 (subject ≤ 50자).
  예: `docs: 프로필 섹션 추가 문서화`, `feat: career 섹션 추가`
- 커밋 메시지 끝에 추가:
  ```
  Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
  ```
- main 브랜치면 작업 성격에 따라 새 브랜치 고려(사용자가 별말 없으면 현 브랜치 커밋 OK).
- push 는 사용자가 명시적으로 요청할 때만.

### 5. 결과 보고
- 갱신/생성한 문서 목록, 커밋 해시/메시지 요약 보고.
