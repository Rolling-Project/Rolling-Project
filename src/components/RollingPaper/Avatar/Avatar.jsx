import * as S from './Avatar.styled';
import Circle from '../Circle/Circle.styled';

function Avatar({ imgUrl, width, height, hasBorder, onClick }) {
  return (
    <Circle width={width} height={height} hasBorder={hasBorder} onClick={onClick}>
      <S.Image src={imgUrl} alt="프로필 이미지" />
    </Circle>
  );
}

export default Avatar;
