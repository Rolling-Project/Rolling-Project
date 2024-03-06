/* eslint-disable quotes */
import styled from '@emotion/styled';

export const ToggleDiv = styled.div`
  width: 24.4rem;
  height: 4rem;
  display: flex;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.color.lightGr};
`;

export const Toggle = styled.div`
  width: 12.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  border: 2px solid ${({ $isToggled, theme }) => ($isToggled ? theme.color.mainPu : `transparent`)};
  background: ${({ $isToggled, theme }) => ($isToggled ? theme.color.white : theme.color.lightGr)};

  font-size: 1.6rem;
  font-style: normal;
  line-height: 2.6rem; /* 162.5% */
  font-weight: ${({ $isToggled }) => ($isToggled ? `700` : `400`)};
  color: ${({ $isToggled, theme }) => ($isToggled ? theme.color.hoverPu : `#181818`)};
  text-align: center;

  cursor: pointer;
`;
