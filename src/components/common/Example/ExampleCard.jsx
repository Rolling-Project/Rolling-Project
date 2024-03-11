/* eslint-disable jsx-quotes */
import React from 'react';
import * as S from './ExampleCard.styled';
import CheckButton from '../Button/CheckButton';

function ExampleCard({ usage = 'option', color, isChecked, onClick, cardUrl }) {
  return (
    <S.Card $usage={usage} color={color} onClick={onClick} $cardUrl={cardUrl} $isChecked={isChecked}>
      {isChecked && <CheckButton status="enabled" />}
    </S.Card>
  );
}
export default ExampleCard;
