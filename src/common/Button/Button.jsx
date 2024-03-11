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
    border: .125rem solid ${colors['--Purple-900']};
    transform: translate(0, -.0625rem);
    background: ${colors['--Purple-800']};
  }
`;

const Primary56Button = styled(Primary)`
  width: ${(props) => props?.w};
  border-radius: .75rem;
  padding: .875rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: -0.0112rem;
`;

const Primary40Button = styled(Primary)`
  width: ${(props) => props?.w};
  border-radius: .375rem;
  padding: .4375rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
`;

export { Primary56Button, Primary40Button };
