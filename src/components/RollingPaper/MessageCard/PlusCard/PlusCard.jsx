import plusIcon from '../../../../assets/images/icons/ic_plus.svg';
import * as S from './PlusCard.styled';

function PlusCard() {
  return (
    <S.Card>
      <S.Plus>
        <img src={plusIcon} alt="플러스 아이콘" />
      </S.Plus>
    </S.Card>
  );
}

export default PlusCard;
