import styled from '@emotion/styled';

export const EmojiWrap = styled.div`
  /* display: flex;
  width: 75rem;
  padding: 3.75rem 0rem 3.75rem 3.75rem;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 9.5rem; */
  // display: flex;
  // align-items: center;
  width: 100%;
  max-width: 75rem;
  background-color: #f6f8ff;
  padding: 60px 60px;
  border-radius: 1rem;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-direction: column;
    // overflow: hidden;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    flex-direction: column;
    overflow: hidden;
  }
`;

export const AddEmojiBox = styled.div`
  width: 25rem;
  height: 3.875rem;
  background-color: white;
  margin: 3.125rem 0rem 0rem 8.75rem;
  margin-left: 7rem;
  margin-top: -2rem;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const AddEmoji = styled.div`
  width: auto;
  height: 1.06rem;
  margin: 1.56rem 0 0.9rem 1.25rem;
  gap: 0.1138rem;
  display: flex;
  // position: relative;
  align-items: center;
`;

export const Emoji = styled.div`
  width: auto;
  height: 2.0569rem;
  border-radius: 1.8181rem;
  padding: 0.5rem 0.75rem 0rem;
  color: white;
  text-align: center;
  background-color: #0000008a;
  margin-right: 0.6rem;
  margin-top: 2.2rem;
`;

export const DownButton = styled.div`
  width: 2.05rem;
  height: 2.05rem;
  padding-top: 1.375rem;
`;

export const AddButton = styled.div`
  height: 2.05rem;
  border: 0.055rem solid #dadcdf;
  border-radius: 5.6rem;
  padding: 0 0.9rem;
  font-size: 0.9rem;
  font-weight: 500;
  gap: 0.3125rem;
  margin-bottom: -2.2rem;
  display: flex;
  // justify-content: center;
  align-items: center;
`;

export const ClickIcon = styled.div`
  // width: 2rem;
  height: 2rem;
  position: relative;
  right: 0.2rem;
  top: 1.5rem;
`;

export const EmojiTypeBox = styled.div`
  width: 18rem;
  height: 9rem;
  margin: 2.5rem 12rem 1rem 1.5rem;
  background-color: white;
  border-radius: 0.57rem;
  border: 0.06rem solid #0000004d;
  box-shadow: 0rem 0.14rem 0.85rem 0rem #00000014;
`;

export const EmojiBox = styled.div`
  width: 14.7681rem;
  height: 2.425rem;
  gap: 0.675rem;
`;

export const EmojiContent = styled.div`
  width: 14.7681rem;
  // height: 2.425rem;
  float: left;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-left: 1.7rem;
  margin-top: 1.25rem;
`;

export const EmojiContentType = styled.div`
  width: 4.535rem;
  height: 2.425rem;
  border-radius: 2.2856rem;
  background-color: #0000008a;
  float: left;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const EmojiContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: -3.5rem 0rem 0rem 40rem;
`;

export const EmojiNum = styled.div`
  width: 5.125rem;
  height: 2rem;
  border-radius: 3.125rem;
  padding: 0.375rem 0.75rem;
  gap: 0.625rem;
  background-color: #9935ff;
  color: white;
  text-align: center;
  line-height: 1.25rem;
  font-size: 0.875rem;
  font-weight: 700;
`;

export const EmojiContentTitle = styled.h1`
  width: 18.75rem;
  height: 4.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
  margin-top: 0.625rem;
`;

export const EmojiContentDescription = styled.p`
  width: 25rem;
  height: 1.75rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.75rem;
  margin-top: 0.625rem;
`;
