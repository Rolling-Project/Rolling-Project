import styled from '@emotion/styled';
import colors from '../../styles/colors';
import Profile from './Profile';
import Date from './Date';
import Divider from './Divider';
import { Primary40Button } from '../common/Button/Button';

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 476px;
  padding: 40px;
  border-radius: 16px;
  background: ${colors['--White']};
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const Content = styled.div`
  width: 520px;
  height: 240px;
  margin: 16px 0 24px;
  padding-right: 8px;
  color: #5a5a5a;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.18px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${colors['--Gray-300']};
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const MessageModal = () => (
  <Modal>

    <Header>
      <Profile />
      <Date fontSize={'14px'}>2023.07.08</Date>
    </Header>

    <Divider />

    <Content>
      코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는
      요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
      하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는
      요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
      하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는
      요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
      하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는
      요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
      하세요
    </Content>

    <Footer>
      <Primary40Button w={'120px'}>확인</Primary40Button>
    </Footer>
    
  </Modal>
);

export default MessageModal;
