import styled from '@emotion/styled';
import colors from '../../../styles/colors';

export const Service = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 475px) {
    width: 100%;
  }
`;

export const SideSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 13px;
`;

export const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 24px;
  background-color: ${colors['--White']};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 475px) {
    flex-wrap: wrap;
  }
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: -0.28px;
  color: ${colors['--Gray-800']};
  cursor: default;

  @media (max-width: 475px) {
    font-size: 18px;
  }
`;

export const Emoji = styled.div`
  display: flex;
  align-items: center;
`;

export const EmojiAdd = styled.div`
  position: relative;
`;

export const Picker = styled.div`
  width: 350px;
  position: absolute;
  top: 42px;
  right: 0;

  @media (max-width: 475px) {
    width: 315px;
    transform: translate(20%, 0);
  }
`;
