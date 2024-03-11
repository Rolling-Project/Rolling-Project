import styled from '@emotion/styled';
import ToggleButton from '../common/Button/ToggleButton';
import colors from '../../styles/colors';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`;

export const To = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1rem;
  width: 50%;
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  max-width: 36rem;
  margin-top: 2.5rem;
  margin-bottom: 3.45rem;
  @media (min-width: 768px) and (max-width: 1247px) {
    margin-bottom: 17rem;
  }
  @media (max-width: 767px) {
    margin-top: 2.4rem;
    margin-bottom: 4.1rem;
  }
`;
export const Title = styled.h1`
  width: 50%;
  max-width: 36rem;
  color: ${colors['--Gray-900']};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: -0.012rem;
  text-align: left;
  gap: 0.6rem;
  margin-top: 3rem;
`;

export const SubTitle = styled.h2`
  width: 50%;
  margin-top: 0.2rem;
  margin-bottom: 1.2rem;

  color: ${colors['--Gray-500']};
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3rem;
  letter-spacing: -0.008rem;
  text-align: left;
  max-width: 36rem;
`;
export const Toggle = styled(ToggleButton)`
  margin-bottom: 2.25rem;
  @media (min-width: 768px) and (max-width: 1247px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 767px) {
    margin-bottom: 1.4rem;
  }
`;
