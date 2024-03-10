import styled from '@emotion/styled';
import colors from '../../../styles/colors';

export const Toast = styled.div`
  position: fixed;
  bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 524px;
  height: 64px;
  max-width: calc(100vw - 16px * 2);
  padding: 19px 30px;
  color: ${colors['--White']};
  border-radius: 8px;
  background: rgba(75, 75, 75, 0.8);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  gap: 12px;
  backdrop-filter: blur(5px);
`;
