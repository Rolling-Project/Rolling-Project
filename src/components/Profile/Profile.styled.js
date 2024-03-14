import styled from '@emotion/styled';
import colors from '../../styles/colors';
import BADGE_COLORS from '../../utils/constants/badgeColors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: .875rem;
`;

export const Name = styled.div`
  font-size: 1.25rem;
  margin-bottom: .375rem;

  span {
    font-weight: bold;
  }

  @media (max-width: 517px) {
    font-size: 1rem;
  }
`;

export const Badge = styled.div`
  display: inline-block;
  padding: 0 .5rem;
  background-color: ${(props) => colors[BADGE_COLORS[props.relationship]?.backgroundColor]};
  color: ${(props) => colors[BADGE_COLORS[props.relationship]?.color]};
  border-radius: .25rem;
  font-size: .875rem;
  line-height: 1.25rem;
  letter-spacing: -0.0044rem;
`;
