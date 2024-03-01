import { css } from '@emotion/react';
import styled from '@emotion/styled';
import colors from '../../styles/colors';

export const Card = styled.li`
  flex: 0 0 auto;
  width: 17.2rem;
  height: 18.8rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 2rem 1.3rem 1.25rem;

  ${({ $effect, $isImage }) =>
    $isImage
      ? css`
          background-color: ${colors[$effect]};
          background-image: none;
        `
      : css`
          background-color: transparent;
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${$effect});
        `};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  cursor: pointer;
  list-style-type: none;
  scroll-snap-align: start; // 카드가 스크롤 시작 부분에 스냅
  &:hover {
    opacity: 0.7;
    transition: 0.7s;
  }
`;

// 대상
export const Recipient = styled.p`
  color: ${({ $isImage }) => ($isImage ? `${colors['--Gray-900']}` : `${colors['--White']}`)};
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 2.25rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
// 최근 메세지 상자
export const RecentMessageBox = styled.div`
  position: relative;
  height: 4rem;
  padding-top: 1rem;
  display: flex;
`;
// 최근 메세지 3명
export const RecentMessage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 3.125rem;
  border: 1.5px solid ${colors['--White']};

  &:nth-of-type(2) {
    position: absolute;
    left: 1.1rem;
  }

  &:nth-of-type(3) {
    position: absolute;
    left: 2.2rem;
  }
`;
// 추가적으로 몇 명이 더 작성했는지
export const Additional = styled.div`
  padding: 0.5rem 0.5rem 0.25rem;
  border-radius: 1.875rem;
  background: ${colors['--White']};
  border: 1.5px solid ${colors['--White']};
  position: absolute;
  left: 3.3rem;
  color: ${colors['--Gray-500']};
  font-size: 0.9rem;
  line-height: 1.125rem;
`;

// 메세지 카운트
export const MessageCount = styled.p`
  color: ${({ $isImage }) => ($isImage ? `${colors['--Black']}` : `${colors['--White']}`)};
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 300;
`;

export const DefaultMessage = styled(MessageCount)`
  color: ${({ $isImage }) => ($isImage ? `${colors['--Black']}` : `${colors['--White']}`)};
  line-height: 2.5rem;
`;

export const TextBoldEffect = styled.span`
  font-weight: 700;
`;

// 리액션 상자
export const ReactionBox = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 14.3rem;
  padding-top: 1.5rem;
  margin-top: 3rem;
  border-top: ${({ $isImage }) =>
    $isImage ? '1.5px solid rgba(0, 0, 0, 0.12)' : '1.5px solid rgba(255, 255, 255, 0.5)'};
  position: absolute;
  z-index: 2;
`;

// 가장 많은 3개 리액션
export const TopReaction = styled.div`
  padding: 0.8rem 0.8rem 0.5rem;
  border-radius: 2rem;
  background: ${({ $isImage }) => ($isImage ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.7)')};
  line-height: 1.25rem;
  color: ${({ $isImage }) => ($isImage ? `${colors['--White']}` : `${colors['--Black']}`)};
`;

export const DefaultReaction = styled(TopReaction)`
  height: 2.65rem;
  font-size: 0.9rem;
`;

export const BackgroundEffect = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 1;
  border-radius: 1rem;
`;
