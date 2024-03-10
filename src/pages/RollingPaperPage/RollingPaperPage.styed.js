import styled from '@emotion/styled';
import colors from '../../styles/colors';
import { isValidUrl } from '../../utils/helpers/validator';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: ${(props) => (isValidUrl(props.bg) ? `url(${props.bg})` : colors[props.bg])};
  background-size: cover;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 7rem 1.5rem;
`;

export const DeletedSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 11px;

  div {
    width: fit-content;
    @media (max-width: 820px) {
      position: fixed;
      bottom: 25px;
      width: 100%;
      max-width: calc(100vw - 24px * 2);
    }
  }
`;
