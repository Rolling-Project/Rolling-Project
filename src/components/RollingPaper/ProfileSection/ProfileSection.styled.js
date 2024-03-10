import styled from '@emotion/styled';
import Circle from '../Circle/Circle.styled';
import colors from '../../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 866px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 28px;
`;

export const Profiles = styled.div`
  position: relative;
  display: flex;
  width: ${({ count }) => (count <= 4 ? `${28 + (count - 1) * 16}px` : '76px')};
  height: 28px;
`;

export const Others = styled(Circle)`
  width: 28px;
  height: 28px;
  background-color: ${colors['--White']};
  border: 1px solid ${colors['--Gray-250']};
`;

export const Item = styled.div`
  position: absolute;

  &:nth-of-type(2) {
    position: absolute;
    left: 16px;
  }

  &:nth-of-type(3) {
    position: absolute;
    left: 32px;
  }

  &:nth-of-type(4) {
    position: absolute;
    left: 48px;
  }
`;

export const Count = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  color: #484848;
  font-size: 12px;
  font-weight: 500;
  transform: translate(-52%, -41%);
`;

export const Text = styled.p`
  font-size: 18px;
  transform: translate(0, 2px);
  strong {
    font-weight: 700;
  }

  @media (max-width: 1019px) {
    display: none;
  }
`;
