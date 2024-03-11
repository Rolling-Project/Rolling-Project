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
  gap: .8125rem;
`;

export const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .8125rem 1.5rem;
  background-color: ${colors['--White']};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 475px) {
    flex-wrap: wrap;
  }
`;

export const Name = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.625rem;
  letter-spacing: -0.0175rem;
  color: ${colors['--Gray-800']};
  cursor: default;

  @media (max-width: 475px) {
    font-size: 1.125rem;
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
  width: 21.87rem;
  position: absolute;
  top: 2.625rem;
  right: 0;

  @media (max-width: 475px) {
    width: 19.68rem;
    transform: translate(20%, 0);
  }
`;
