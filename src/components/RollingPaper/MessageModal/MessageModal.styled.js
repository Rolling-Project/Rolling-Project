import styled from '@emotion/styled';
import colors from '../../../styles/colors';

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 37.5rem;
  height: 29.75rem;
  padding: 2.5rem;
  border-radius: 1rem;
  background: ${colors['--White']};
  box-shadow: 0 .125rem .75rem 0 rgba(0, 0, 0, 0.08);
  max-width: calc(100vw - 1rem * 2);
  z-index: 1001;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.25rem;
`;

export const Content = styled.div`
  width: 100%;
  height: 15rem;
  margin: 1rem 0 1.5rem;
  padding-right: .5rem;
  color: #5a5a5a;
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: -0.0112rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: .25rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: .25rem;
    background: ${colors['--Gray-300']};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;
