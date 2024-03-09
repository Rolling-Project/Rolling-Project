/* eslint-disable jsx-quotes */
import { useState } from 'react';
import styled from '@emotion/styled';
import colors from '../../styles/colors';
import CheckIcon from '../../assets/checkIcon.svg';

const CheckButtonBackground = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: ${({ $status }) => {
    switch ($status) {
      case 'enabled':
        return colors['--Purple-600'];
      case 'disabled':
        return colors['--Gray-300'];
      case 'hover':
        return colors['--Purple-700'];
      case 'focus':
        return colors['--Purple-800'];
      default:
        return colors['--Gray-300'];
    }
  }};
  border: ${({ $status }) => ($status === 'focus' ? `1px solid ${colors['--Gray-800']}` : 'none')};
`;

function CheckButton({ status }) {
  const [btnStatus, setBtnStatus] = useState('enabled');

  const handleChangeBtnState = (newStatus) => {
    setBtnStatus(newStatus);
  };

  const lastBtnStatus = status === 'disabled' ? 'disabled' : btnStatus;

  return (
    <CheckButtonBackground
      $status={lastBtnStatus}
      onMouseEnter={() => handleChangeBtnState('hover')}
      onMouseLeave={() => handleChangeBtnState('enabled')}
      onFocus={() => handleChangeBtnState('focus')}
      onBlur={() => handleChangeBtnState('enabled')}
    >
      <img src={CheckIcon} alt='check icon' />
    </CheckButtonBackground>
  );
}

export default CheckButton;
