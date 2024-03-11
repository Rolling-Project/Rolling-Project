import styled from '@emotion/styled';
import colors from '../../../styles/colors';

export const Toast = styled.div`
  position: fixed;
  bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 32.75rem;
  height: 4rem;
  max-width: calc(100vw - 1rem * 2);
  padding: 1.1875rem 1.875rem;
  color: ${colors['--White']};
  border-radius: .5rem;
  background: rgba(75, 75, 75, 0.8);
  box-shadow: 0 .25rem .875rem 0 rgba(0, 0, 0, 0.25);
  gap: .75rem;
  backdrop-filter: blur(.3125rem);
`;
