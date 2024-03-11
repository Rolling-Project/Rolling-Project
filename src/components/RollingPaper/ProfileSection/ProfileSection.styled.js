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
  gap: .625rem;
  margin: 0 1.75rem;
`;

export const Profiles = styled.div`
  position: relative;
  display: flex;
  width: ${({ count }) => (count <= 4 ? `${28 + (count - 1) * 16}px` : '4.75rem')};
  height: 1.75rem;
`;

export const Others = styled(Circle)`
  width: 1.75rem;
  height: 1.75rem;
  background-color: ${colors['--White']};
  border: .0625rem solid ${colors['--Gray-250']};
`;

export const Item = styled.div`
  position: absolute;

  &:nth-of-type(2) {
    position: absolute;
    left: 1rem;
  }

  &:nth-of-type(3) {
    position: absolute;
    left: 2rem;
  }

  &:nth-of-type(4) {
    position: absolute;
    left: 3rem;
  }
`;

export const Count = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  color: #484848;
  font-size: .75rem;
  font-weight: 500;
  transform: translate(-52%, -41%);
`;

export const Text = styled.p`
  font-size: 1.125rem;
  transform: translate(0, .125rem);
  strong {
    font-weight: 700;
  }

  @media (max-width: 1019px) {
    display: none;
  }
`;
