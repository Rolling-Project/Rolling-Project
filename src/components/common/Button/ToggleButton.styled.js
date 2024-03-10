/* eslint-disable quotes */
import styled from '@emotion/styled';
import colors from '../../../styles/colors';

export const ToggleDiv = styled.div`
  width: 12.2rem;
  height: 2rem;
  display: flex;
  border-radius: 0.6rem;
  background: ${colors['--Gray-100']};
`;

export const Toggle = styled.div`
  width: 6.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  border: 2px solid ${({ $isToggled }) => ($isToggled ? colors['--Purple-600'] : `transparent`)};
  background: ${({ $isToggled }) => ($isToggled ? colors['--White'] : colors['--Gray-100'])};

  font-size: 0.8rem;
  font-style: normal;
  line-height: 2.6rem; /* 162.5% */
  font-weight: ${({ $isToggled }) => ($isToggled ? `700` : `400`)};
  color: ${({ $isToggled }) => ($isToggled ? colors['--Purple-700'] : colors['--Gray-900'])};
  text-align: center;

  cursor: pointer;
`;
