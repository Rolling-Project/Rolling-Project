import styled from '@emotion/styled';
import colors from '../../../styles/colors';

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
    &:disabled {
      background-color: ${colors['--Gray-300']};
    }
    background-color: ${colors['--Purple-700']};
  }

  &:active {
    background-color: ${colors['--Purple-800']};
  }

  &:focus {
    background: ${colors['--Purple-800']};
  }
`;

const Primary56Button = styled(Primary)`
  width: ${(props) => props?.w};
  border-radius: 0.75rem;
  padding: 0.875rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: -0.0112rem;
`;

const Primary40Button = styled(Primary)`
  width: ${(props) => props?.w};
  border-radius: 0.375rem;
  padding: 0.4375rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
`;

const Outlined = styled(BaseButton)`
  color: ${colors['--Gray-900']};
  &:enabled {
    border: 1px solid ${colors['--Gray-300']};
    background-color: ${colors['--White']};
  }

  &:disabled {
    border: 1px solid ${colors['--Gray-300']};
    background-color: ${colors['--Gray-300']};
    color: ${colors['--White']};
    cursor: not-allowed;
  }

  &:hover,
  &:active {
    border: 1px solid ${colors['--Gray-300']};
    background-color: ${colors['--Gray-100']};
  }

  &:focus {
    border: 1px solid ${colors['--Gray-500']};
    background: ${colors['--White']};
  }
`;

const Outlined36Button = styled(Outlined)`
  width: fit-content;
  height: fit-content;
  border-radius: 0.375rem;
  padding: ${({ small }) => (small ? '.375rem .5rem' : '.375rem 1rem')};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  display: flex;
  gap: 0.25rem;
  @media (max-width: 475px) {
    padding: 0.375rem 0.5rem;
    span {
      display: none;
    }
  }
`;

export { Primary56Button, Primary40Button, Outlined, Outlined36Button };
