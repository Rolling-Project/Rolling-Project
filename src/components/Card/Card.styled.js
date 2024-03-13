import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import BACKGROUND_IMAGE_EFFECT from '../../utils/constants/bgImageEffect';
import colors from '../../styles/colors';

export const Card = styled.li`
  flex: 0 0 auto;
  width: 17.2rem;
  height: ${({ $isBig }) => ($isBig ? '18.8rem' : '16.25rem')};
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 2rem 1.3rem 1.25rem;

  ${({ $effect, $isImage, color }) => $isImage
    ? css`
          background-color: ${colors[$effect]};
          background-image: url(${BACKGROUND_IMAGE_EFFECT[color]});
          background-position: 100% 100%;
        `
    : css`
          background-color: transparent;
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${$effect});
          background-size: cover;
        `};
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
  list-style-type: none;
  scroll-snap-align: start; // 카드가 스크롤 시작 부분에 스냅
  &:hover {
    opacity: 0.7;
    transition: 0.7s;
  }
`;

export const CardLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

// 대상
export const Recipient = styled.p`
  color: ${({ $isImage }) => ($isImage ? `${colors['--Gray-900']}` : `${colors['--White']}`)};
  font-size: 1.8rem;
  font-size: ${({ $isBig }) => ($isBig ? '1.7rem' : '1.5rem')};
  font-weight: 800;
  line-height: 2.25rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  margin-bottom: 0.75rem;
  margin-bottom: ${({ $isBig }) => ($isBig ? '0.9rem' : '0.55rem')};
`;

// 최근 메세지 상자
export const RecentMessageBox = styled.div`
  position: relative;
  display: flex;
`;

// 메세지 카운트
export const MessageCount = styled.p`
  color: ${({ $isImage }) => ($isImage ? `${colors['--Black']}` : `${colors['--White']}`)};
  line-height: ${({ $isBig }) => ($isBig ? '2rem' : '1.5rem')};
  font-size: ${({ $isBig }) => ($isBig ? '1.3rem' : '1.2rem')};
  font-weight: 300;
  padding-top: 0.75rem;
`;

export const DefaultMessage = styled(MessageCount)`
  line-height: ${({ $isBig }) => ($isBig ? '1.95rem' : '1.75rem')};
  padding-top: 0;
`;

export const TextBoldEffect = styled.span`
  font-weight: 700;
`;

// 리액션 상자
export const ReactionBox = styled.div`
  display: flex;
  gap: 0.45rem;
  width: 14.3rem;
  padding-top: ${({ $isBig }) => ($isBig ? '1.5em' : '1rem')};
  margin-top: ${({ $isBig }) => ($isBig ? '3rem' : '2.3rem')};
  border-top: ${({ $isImage }) => $isImage ? '1.5px solid rgba(0, 0, 0, 0.12)' : '1.5px solid rgba(255, 255, 255, 0.5)'};
  position: absolute;
  z-index: 2;
  font-size: 0.95rem;
`;

export const DefaultReaction = styled.div`
  padding: 0.8rem 0.8rem 0.5rem;
  border-radius: 2rem;
  background: ${({ $isImage }) => ($isImage ? 'rgba(0, 0, 0, 0.54)' : 'rgba(255, 255, 255, 0.7)')};
  line-height: 1.25rem;
  color: ${({ $isImage }) => ($isImage ? `${colors['--White']}` : `${colors['--Black']}`)};
  height: 2.65rem;
  font-size: 0.9rem;
`;

export const BackgroundEffect = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 1;
  border-radius: 1rem;
  z-index: 0;
`;
