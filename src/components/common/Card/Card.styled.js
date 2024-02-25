import styled from "@emotion/styled";
import { colors } from '../../../styles/colors'

export const Card = styled.li`
  flex: 0 0 auto;
  width: 14.5rem;
  height: 13.5rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 1.8rem 1.5rem 1.25rem;
  background-color: ${({ $color }) => colors[$color]};
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

// 대상
export const Recipient = styled.p`
  color: ${colors['Gray-900']};
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 2.25rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
`;
// 최근 메세지 상자
export const RecentMessageBox = styled.div`
  position: relative;
  margin: 0.75rem 0;
  display: flex;
`;
// 최근 메세지 3명
export const RecentMessage = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 3.125rem;
  border: 1.5px solid ${colors.White};

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
  padding: 0.4rem 0.4rem 0.25rem;
  border-radius: 1.875rem;
  background: ${colors.White};
  border: 1.5px solid ${colors.White};
  position: absolute;
  left: 3.3rem;
  color: ${colors['Gray-500']};
  font-size: 0.85rem;
  line-height: 1.125rem;
`;

// 메세지 카운트
export const MessageCount = styled.p`
  color: ${colors['Gray-700']};
  line-height: 1.625rem;
  font-weight: 300;
`;

export const TextBoldEffect = styled.span`
  font-weight: 700;
`;

// 리액션 상자
export const ReactionBox = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 14.5rem;
  padding-top: 1.1rem;
  margin-top: 2.69rem;
  border-top: 1.5px solid rgba(0, 0, 0, 0.12);
  position: absolute;
  z-index: 2;
`;

// 가장 많은 3개 리액션
export const TopReaction = styled.div`
  padding: 0.6rem 0.75rem 0.3rem;
  border-radius: 2rem;
  background: rgba(0, 0, 0, 0.45);
  line-height: 1.25rem;
  color: ${colors.White};
`;

export const back = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 1;
`;
