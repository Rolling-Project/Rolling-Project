import styled from '@emotion/styled';
import colors from '../../styles/colors';
import completedIcon from '../../assets/completed.png';
import closedIcon from '../../assets/close.png';

const Container = styled.div`
  position: fixed;
  bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 524px;
  height: 64px;
  max-width: calc(100vw - 16px * 2);
  padding: 19px 30px;
  color: ${colors['--White']};
  border-radius: 8px;
  background: rgba(75, 75, 75, 0.8);
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
  gap: 12px;
  backdrop-filter: blur(5px);
`;

const Item = styled.div`
  &:nth-of-type(2) {
    flex: 1;
  }
`;

const ClosedButton = styled.button`
  background: none;
  border: none;
`;

function ToastBar({ children }) {
  return (
    <Container>
      <Item>
        <img src={completedIcon} />
      </Item>
      <Item>
        <p>{children}</p>
      </Item>
      <Item>
        <ClosedButton>
          <img src={closedIcon} />
        </ClosedButton>
      </Item>
    </Container>
  );
}

export default ToastBar;
