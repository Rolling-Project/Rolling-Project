import { defineConfig } from 'vite'; // Vite에서 사용되는 설정 객체를 생성하는 함수
import react from '@vitejs/plugin-react'; // React를 지원하기 위한 Vite 플러그인, JSX 변환 및 기타 React 관련 기능을 자동으로 처리

export default defineConfig({
  plugins: [react()], // 사용한 플러그인들을 배열로 전달 현재는 React 플러그인만 사용
});
