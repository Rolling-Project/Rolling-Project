import styled from '@emotion/styled';
import colors from '../../styles/colors';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  display: block;
  padding: 1.2rem 1.6rem;
  border: 0.1rem solid var(--gray-300, #ccc);
  width: 100%;
  height: 5rem;
  background: var(--White, #fff);

  font-size: 1.6rem;
  line-height: 2.6rem; /* 162.5% */
  letter-spacing: -0.016rem;
  border-radius: 0.8rem;

  &:focus {
    border: 0.2rem solid var(--Gray-700, #3a3a3a);
    outline: none;
  }

  &:disabled {
    border: 0.1rem solid var(--Gray-300, #ccc);
    background: var(--Gray-100, #f6f6f6);
  }
`;

const ErrorMessage = styled.div`
  display: none;
  font-size: 12px;
  color: #dc3a3a;

  ${InputContainer}.error & {
    display: block;
  }
`;

const ErrorInput = styled(Input)`
  border: 0.1rem solid var(--Error, #dc3a3a);

  &:hover,
  &:focus {
    border: 0.1rem solid var(--Error, #dc3a3a);
    outline-color: #dc3a3a;
  }
`;
