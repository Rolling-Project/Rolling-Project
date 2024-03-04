/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// Emotion 스타일 컴포넌트로 .container 클래스 스타일 정의
const Container = styled.div`
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 26rem;
  margin-bottom: 1rem;
`;

function Markdown({ setter }) {
  //   useState로 마크다운 텍스트 관리
  const [markdown, setMarkdown] = useState('');

  //   Textarea의 변경사항을 처리하고 텍스트 상태 관리
  const handleChange = (e) => {
    const { value } = e.target;
    setMarkdown(value);
    if (setter) {
      setter(value);
    }
  };

  return (
    <Container>
      <TextArea onChange={handleChange} value={markdown} />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Container>
  );
}

export default Markdown;
