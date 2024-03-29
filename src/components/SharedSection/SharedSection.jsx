import { useState, useEffect, useRef } from 'react';
import { Outlined36Button } from '../common/Button/Button';
import shardIcon from '../../assets/images/icons/share-24.svg';
import * as S from './SharedSection.styled';

const { Kakao } = window;

function SharedSection({ onClick }) {
  const dropRef = useRef(null);

  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  const sharedKakao = () => {
    const currentUrl = window.location.href;
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling',
        description: '누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요',
        imageUrl:
          'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbREyvk-h_Uknv5ftE3dYQSzEOPL0hvEFVnVV2Zk6ScZo-1O75ww8Q22KKZ9CWCW4b6yhnQ8kCHz8xb9WRMHjB6udmCrw=w2480-h1608',
        link: {
          mobileWebUrl: currentUrl,
          webUrl: currentUrl
        }
      }
    });
  };

  const handleOutSideClick = (e) => {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutSideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  });

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(import.meta.env.VITE_API_KAKAO_KEY);
  }, []);

  return (
    <S.Shared Shared ref={dropRef}>
      <Outlined36Button type="button" onClick={handleDropDown}>
        <S.Icon src={shardIcon} alt="공유 아이콘" />
      </Outlined36Button>
      {showDropDown && (
        <S.SharedDropDown>
          <span onClick={sharedKakao} onKeyDown={sharedKakao} role="presentation">
            카카오톡 공유
          </span>
          <span onClick={onClick} onKeyDown={sharedKakao} role="presentation">
            URL 공유
          </span>
        </S.SharedDropDown>
      )}
    </S.Shared>
  );
}

export default SharedSection;
