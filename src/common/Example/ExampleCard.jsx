/* eslint-disable jsx-quotes */
import React from 'react';
import * as S from './ExampleCard.styled';
import { Primary56Button } from '../Button/Button';

function ExampleCard({ usage = 'option', color, isChecked, onClick, cardUrl }) {
  return (
    <S.Card $usage={usage} color={color} onClick={onClick} $cardUrl={cardUrl} $isChecked={isChecked}>
      {isChecked && <Primary56Button shape='enable' />}
    </S.Card>
  );
}
export default ExampleCard;
