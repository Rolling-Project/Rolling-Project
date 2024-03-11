import styled from '@emotion/styled';
import { Outlined36Button } from './Button';

const Icon = styled.img`
  @media (max-width: 475px) {
    width: 1.25rem;
  }
`;

function Outlined36IconButton({ children, onClick, disabled, icon }) {
  return (
    <Outlined36Button onClick={onClick} disabled={disabled}>
      <Icon src={icon} />
      <span>{children}</span>
    </Outlined36Button>
  );
}

export default Outlined36IconButton;
