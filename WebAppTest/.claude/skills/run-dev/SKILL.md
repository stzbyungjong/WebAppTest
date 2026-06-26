---
name: run-dev
description: 로컬 테스트용 개발 서버 실행 스킬. npm run dev 로 Next.js 개발 서버를 띄우고 http://localhost:3000 접속 안내. 사용자가 "로컬 실행", "테스트 서버 켜", "dev 서버", "run dev", "로컬에서 띄워줘"라고 할 때 사용.
---

# run-dev — 로컬 개발 서버 실행

로컬 테스트를 위해 Next.js 개발 서버를 실행한다.

## 절차

### 1. 의존성 확인
- `node_modules` 없으면 먼저 `npm install` 실행.

### 2. 서버 실행
- `npm run dev` 를 **백그라운드(run_in_background)** 로 실행.
- 포그라운드로 띄우면 세션이 블록되므로 반드시 백그라운드.

### 3. 준비 확인
- 출력 로그에서 `✓ Ready` 와 `Local: http://localhost:3000` 확인.
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000` 로 `200` 응답 확인.

### 4. 포트 충돌 대응
- 포트 3000 사용 중이면 `npm run dev -- -p 3001` 등 다른 포트로 재실행하고 그 주소 안내.

### 5. 사용자 안내
- 접속 주소(http://localhost:3000) 안내.
- 파일 저장 시 자동 새로고침(HMR)됨.
- 종료 방법: 해당 터미널에서 `Ctrl + C`.
- 참고: `ERR_CONNECTION_REFUSED` 는 서버 안 켜진 상태 — 이 스킬로 서버부터 실행하면 해결.
