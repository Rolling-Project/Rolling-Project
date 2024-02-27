module.exports = {
  env: {
    // 프로젝트 환경 지정(브라우저 및 ECMAScript 2021)
    browser: true,
    es2021: true,
  },
  extends: 'airbnb', // Aribnb의 JavaScript 스타일 가이드 기반
  overrides: [
    // 특정 환경 또는 파일에 대한 추가적인 설정 정의
    {
      env: {
        // 해당 설정이 적용될 환경 정의
        node: true,
      },
      files: [
        // 설정이 적용될 파일 정의
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        // ES Module 형식의 스크립트 파일 사용(import/export)
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    // 코드를 해석하는데 필요한 parse 옵션 정의(가장 최신 ECMAScript 사용, 모듈)
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // ESLint 규칙을 추가하거나 재정의
    indent: ['error', 2, { SwitchCase: 1 }], // 들여쓰기 2칸만 허용(switch문의 case 본문의 들여쓰기 제어)
    'no-var': 'error', // // var 키워드 사용 금지
    'require-await': 'error', // async 함수 내부에 await 키워드가 없으면 오류 발생
    eqeqeq: 'warn', // ==, != 대신에 ===, !== 사용
    'react/prop-types': 0, // 프로퍼티(prop) 타입 체크를 수행하지 않도록 설정
    'no-unused-vars': 'off', // 사용되지 않는 변수에 대한 경고를 끄는 규칙(호출되지 않은 변수 사용 가능)
    'react/react-in-jsx-scope': 'off',
    'max-len': ['error', { code: 120 }],
    indent: 'off', // 들여쓰기 경고 비활성화
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
};
