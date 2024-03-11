import { useState, useEffect, useRef } from 'react';
import { Outlined36Button } from '../../common/Button/Button';
import shardIcon from '../../../assets/images/icons/share-24.svg';
import * as S from './SharedSection.styled';

const { Kakao } = window;

function SharedSection({ onClick }) {
  const dropRef = useRef(null);

  const currentUrl = window.location.href;

  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDown = () => {
    setShowDropDown((prev) => !prev);
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
