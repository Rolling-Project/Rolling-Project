import styled from '@emotion/styled';
import colors from '../../../styles/colors';

// 가장 많은 3개 리액션
export const TopReaction = styled.div`
  padding: 0.75rem 0.75rem 0.55rem;
  border-radius: 2rem;
  background: ${({ $isImage }) => ($isImage ? 'rgba(0, 0, 0, 0.54)' : 'rgba(255, 255, 255, 0.7)')};
  line-height: 1.25rem;
  color: ${({ $isImage }) => ($isImage ? `${colors['--White']}` : `${colors['--Black']}`)};
`;
