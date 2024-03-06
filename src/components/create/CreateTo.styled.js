import styled from '@emotion/styled';
import ToggleButton from '../../common/Button/ToggleButton';
import colors from '../../styles/colors';

export const Div = styled.div`
  display: 'flex';
  flexdirection: 'column';
  alignitems: 'center';
  ustifycontent: 'center';
`;

export const To = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 72rem;
  margin-top: 5rem;
  margin-bottom: 6.9rem;
  @media (min-width: 768px) and (max-width: 1247px) {
    margin-bottom: 34rem;
  }
  @media (max-width: 767px) {
    margin-top: 4.8rem;
    margin-bottom: 8.2rem;
  }
`;
export const Title = styled.h1`
  display: flex;
  width: 100%;
  max-width: 72rem;

  color: ${colors['--Gray-900']};
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.2rem; /* 175% */
  letter-spacing: -0.024rem;
`;
export const SubTitle = styled.h2`
  width: 100%;
  margin-top: 0.4rem;
  margin-bottom: 2.4rem;

  color: ${colors['--Gray-500']};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.6rem; /* 162.5% */
  letter-spacing: -0.016rem;
`;
export const Toggle = styled(ToggleButton)`
  margin-bottom: 4.5rem;
  @media (min-width: 768px) and (max-width: 1247px) {
    margin-bottom: 4rem;
  }
  @media (max-width: 767px) {
    margin-bottom: 2.8rem;
  }
`;
