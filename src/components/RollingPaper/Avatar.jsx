import styled from '@emotion/styled';
import Circle from './Circle';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Avatar({ imgUrl, width, height, hasBorder, onClick }) {
  return (
    <Circle width={width} height={height} hasBorder={hasBorder} onClick={onClick}>
      <Image src={imgUrl} alt="프로필 이미지" />
    </Circle>
  );
}

export default Avatar;
