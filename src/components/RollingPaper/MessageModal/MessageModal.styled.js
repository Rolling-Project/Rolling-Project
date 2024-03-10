import styled from '@emotion/styled';
import colors from '../../../styles/colors';

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 476px;
  padding: 40px;
  border-radius: 16px;
  background: ${colors['--White']};
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  max-width: calc(100vw - 16px * 2);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

export const Content = styled.div`
  width: 100%;
  height: 240px;
  margin: 16px 0 24px;
  padding-right: 8px;
  color: #5a5a5a;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.18px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
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
`;
