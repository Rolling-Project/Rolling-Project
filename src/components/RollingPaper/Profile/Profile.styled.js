import styled from '@emotion/styled';
import colors from '../../../styles/colors';
import BADGE_COLORS from '../../../utils/constants/badgeColors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Name = styled.div`
  font-size: 20px;
  margin-bottom: 6px;

  span {
    font-weight: bold;
  }

  @media (max-width: 517px) {
    font-size: 16px;
  }
`;

export const Badge = styled.div`
  display: inline-block;
  padding: 0 8px;
  background-color: ${(props) => colors[BADGE_COLORS[props.relationship]?.backgroundColor]};
  color: ${(props) => colors[BADGE_COLORS[props.relationship]?.color]};
  border-radius: 4px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.07px;
`;
