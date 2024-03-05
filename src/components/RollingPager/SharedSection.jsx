import styled from '@emotion/styled';
import colors from '../../styles/colors';
import BaseDropDown from './DropDown';
import { Outlined36Button } from '../../components/common/Button/Button';
import shardIcon from '../../assets/share-24.svg';
import { useEffect } from 'react';

const Shared = styled.div`
  position: relative;
`;

const SharedDropDown = styled(BaseDropDown)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 42px;
  right: 0;
  padding: 10px 1px;
  span {
    width: 138px;
    padding: 12px 16px;
    &:hover {
      background-color: ${colors['--Gray-100']};
    }
  }
`;

const { Kakao } = window;

function SharedSection() {
  const currentUrl = window.location.href;

  const copyToClipboard = () => {
    const textToCopy = currentUrl;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log('복사하기 성공');
      })
      .catch((error) => {
        console.error('error:', error);
      });
  };

  const sharedKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling',
        description: '누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요',
        imageUrl: 'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: currentUrl,
          webUrl: currentUrl
        }
      }
    });
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(import.meta.env.VITE_API_KAKAO_KEY);
  }, []);

  return (
    <Shared>
      <Outlined36Button w={'56px'}>
        <img src={shardIcon} />
      </Outlined36Button>
      <SharedDropDown>
        <span onClick={sharedKakao}>카카오톡 공유</span>
        <span onClick={copyToClipboard}>URL 공유</span>
      </SharedDropDown>
    </Shared>
  );
}

export default SharedSection;
