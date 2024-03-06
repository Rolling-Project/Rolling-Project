import styled from '@emotion/styled';
import colors from '../../../styles/colors';
import addIcon from '../../../assets/add-24.svg';

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
  border-radius: 6px;
  padding: 6px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  gap: 4px;
  @media (max-width: 475px) {
    padding: 6px 8px;
    span {
      display: none;
    }
  }
`;

const Icon = styled.img`
    @media (max-width: 475px) {
    width: 20px;
  }
`

function Outlined36IconButton({ children, onClick, disabled, width }) {
  return (
    <Outlined36Button onClick={onClick} disabled={disabled} w={width}>
      <Icon src={addIcon} />
      <span>{children}</span>
    </Outlined36Button>
  );
}

export { Primary56Button, Primary40Button, Outlined36Button, Outlined36IconButton };
