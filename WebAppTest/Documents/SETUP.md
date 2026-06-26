# 로컬 실행 / 테스트 방법

## 사전 준비
- Node.js 설치 (LTS 권장, 18.18+ 이상)
- 프로젝트 루트: `C:\Git\WebAppTest\WebAppTest\WebAppTest`

## 1. 의존성 설치 (최초 1회)
```bash
npm install
```

## 2. 개발 서버 실행 (테스트용)
```bash
npm run dev
```
- 브라우저에서 접속: http://localhost:3000
- 파일을 저장하면 자동 새로고침(HMR)되어 변경이 바로 보임.
- `data/profile.json` 이나 `public/images/` 의 이미지를 바꾼 뒤 새로고침하면 반영됨.
- 종료: 터미널에서 `Ctrl + C`

## 3. 프로덕션 빌드 확인 (선택)
배포 전 정상 빌드되는지 검증:
```bash
npm run build      # 빌드
npm run start      # 빌드 결과 실행 (http://localhost:3000)
```

## 자주 쓰는 스크립트
| 명령 | 설명 |
|------|------|
| `npm run dev`   | 개발 서버 (테스트) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint`  | 린트 검사 |

## 문제 해결
- 포트 3000 사용 중이면: `npm run dev -- -p 3001` 로 다른 포트 사용.
- 이미지가 안 보이면: `data/profile.json` 의 `imagePath` 와 실제 파일 경로(`public/images/...`)가 일치하는지 확인. → 자세한 내용 `EDITING.md`.
