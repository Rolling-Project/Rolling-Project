import { defineConfig } from 'vite'; // Vite에서 사용되는 설정 객체를 생성하는 함수
import react from '@vitejs/plugin-react'; // React를 지원하기 위한 Vite 플러그인, JSX 변환 및 기타 React 관련 기능을 자동으로 처리

export default defineConfig({
  plugins: [react()],
  build: {
    // 프로덕션 빌드된 파일들이 생성될 디렉토리를 지정
    outDir: 'dist',
    // 코드를 최적화(압축)하여 용량을 줄아고 성능을 향상
    minify: true,
    // 소스 맵(개발 중 디버깅) 비활성화
    sourcemap: false,
    // CSS 압축 설정
    cssCodeSplit: true,
    // 코드를 작은 조각으로 나누어 로딩 성능 최적화(2,000 바이트 초과 시 경고)
    chunkSizeWarningLimit: 2000
  }
});
