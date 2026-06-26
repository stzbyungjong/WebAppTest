import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 서버 기능이 없는 정적 앱 → 정적 HTML 로 export (out/ 생성).
  // Cloudflare Pages 등 정적 호스팅에 그대로 배포 가능.
  output: "export",
  // 정적 export 에서는 이미지 최적화 서버가 없으므로 비활성화.
  images: { unoptimized: true },
};

export default nextConfig;
