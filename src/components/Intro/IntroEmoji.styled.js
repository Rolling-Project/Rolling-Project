import styled from '@emotion/styled';

export const EmojiWrap = styled.div`
  width: 100%;
  max-width: 75rem;
  background-color: #f6f8ff;
  padding: 3.75rem 3.75rem;
  border-radius: 1rem;
  display: flex;
  height: 20.25rem;
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 1200px) {
    flex-direction: column;
    overflow: hidden;
    gap: 2rem;
    height: auto;
    padding-bottom: 10rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
    gap: 2rem;
    height: auto;
    padding-top: 2rem;
    padding-bottom: 10rem;
    padding-left: 1rem;
  }
  @media (max-width: 400px) {
    padding: 1.5rem 1.5rem 10rem;
  }
`;

export const AddEmojiBox = styled.div`
  width: 25rem;
  height: 3.875rem;
  background-color: white;
  margin: 0 6.5rem;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 2rem;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    margin: 0 auto;
  }
`;

export const AddEmoji = styled.div`
  width: auto;
  height: 1.06rem;
  gap: 0.1138rem;
  padding-left: 2rem;
  display: flex;
  position: relative;
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
  align-items: center;
`;

export const ClickIcon = styled.div`
  height: 2rem;
  position: relative;
  right: 0.2rem;
  top: 1.5rem;
`;

export const EmojiTypeBox = styled.div`
  width: 18rem;
  height: 9rem;
  background-color: white;
  border-radius: 0.57rem;
  border: 0.06rem solid #0000004d;
  box-shadow: 0rem 0.14rem 0.85rem 0rem #00000014;
  position: absolute;
  top: 3rem;
`;

export const EmojiBox = styled.div`
  width: 14.7681rem;
  height: 2.425rem;
  gap: 0.675rem;
`;

export const EmojiContent = styled.div`
  width: 14.7681rem;
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
  @media (min-width: 768px) and (max-width: 1200px) {
    order: -1;
    padding: 1rem 1.8rem;
  }
  @media (max-width: 768px) {
    order: -1;
  }
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
  height: 4.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
  margin-top: 0.8rem;
  @media (min-width: 768px) and (max-width: 1200px) {
    br {
      display: none;
    }
  }
`;

export const EmojiContentDescription = styled.p`
  height: 1.75rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.75rem;
  margin-top: 1rem;
  @media (min-width: 768px) and (max-width: 1200px) {
    margin-top: -1rem;
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
