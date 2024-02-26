import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";

export const Card = styled.li`
  flex: 0 0 auto;
  width: 14.5rem;
  height: 13rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 1.8rem 1.5rem 1.25rem;
  background-color: ${({ $color }) => colors[$color]};
  background-image: ${({ $image }) => `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${$image})`};
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

// 대상
export const Recipient = styled.p`
  color: ${({ $isColor }) => ($isColor ? `${colors["Gray-900"]}` : `${colors.White}`)};
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 2.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
// 최근 메세지 상자
export const RecentMessageBox = styled.div`
  position: relative;
  height: 2.5rem;
  padding-top: 0.75rem;
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
  color: ${colors["Gray-500"]};
  font-size: 0.85rem;
  line-height: 1.125rem;
`;

// 메세지 카운트
export const MessageCount = styled.p`
  color: ${({ $isColor }) => ($isColor ? `${colors["Gray-700"]}` : `${colors.White}`)};
  line-height: 1.625rem;
  font-size: 1.1rem;
  font-weight: 300;
`;

export const DefaultMessage = styled(MessageCount)`
  color: ${({ $isColor }) => ($isColor ? `${colors["Gray-700"]}` : `${colors.White}`)};
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
  padding-top: 1.1rem;
  margin-top: 2.4rem;
  border-top: ${({ $isColor }) => ($isColor ? "1.5px solid rgba(0, 0, 0, 0.12)"
    : "1.5px solid rgba(255, 255, 255, 0.5)")};
  position: absolute;
  z-index: 2;
`;

// 가장 많은 3개 리액션
export const TopReaction = styled.div`
  padding: 0.6rem 0.75rem 0.3rem;
  border-radius: 2rem;
  background: ${({ $isColor }) => ($isColor ? "rgba(0, 0, 0, 0.45)" : "rgba(255, 255, 255, 0.7)")};
  line-height: 1.25rem;
  color: ${({ $isColor }) => ($isColor ? `${colors.White}` : `${colors.Black}`)};
`;

export const DefaultReaction = styled(TopReaction)`
  height: 1.4rem;
  font-size: 0.9rem;
`;

export const BackgroundEffect = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 1;
`;
