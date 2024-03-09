import styled from '@emotion/styled';
import colors from '../../styles/colors';

const BaseButton = styled.button`
  width: 100%;
  border: none;
  text-align: center;
  cursor: pointer;
`;

const Primary = styled(BaseButton)`
  color: ${colors['--White']};
  &:enabled {
    background-color: ${colors['--Purple-600']};
  }

  &:disabled {
    background-color: ${colors['--Gray-300']};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${colors['--Purple-700']};
  }

  &:active {
    background-color: ${colors['--Purple-800']};
  }

  &:focus {
    border: 2px solid ${colors['--Purple-900']};
    transform: translate(0, -1px);
    background: ${colors['--Purple-800']};
  }
`;

const Primary56Button = styled(Primary)`
  width: ${(props) => props?.w};
  border-radius: 12px;
  padding: 14px 24px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.18px;
`;

const Primary40Button = styled(Primary)`
  width: ${(props) => props?.w};
  border-radius: 6px;
  padding: 7px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
`;

export { Primary56Button, Primary40Button };
