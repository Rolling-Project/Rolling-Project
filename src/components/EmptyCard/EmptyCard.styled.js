import styled from '@emotion/styled';
import colors from '../../styles/colors';

export const EmptyCardBox = styled.div`
  width: 100%;
  height: ${({ all }) => (all ? '40rem' : '14rem')};
  padding: ${({ all }) => (all ? '12rem 0rem' : '2rem 0rem')};
  margin-top: ${({ all }) => (all ? '2rem' : '0.5rem')};
  text-align: center;
  font-size: ${({ all }) => (all ? '2.3rem' : '1.7rem')};
  line-height: ${({ all }) => (all ? '6rem' : '4.7rem')};
  font-weight: 700;
  border: 3px solid ${colors['--Purple-700']};
  border-radius: 1rem;

  @media (max-width: 800px) {
    font-size: ${({ all }) => (all ? '1.8rem' : '1.7rem')};
  }

  @media (max-width: 770px) {
    margin-top: ${({ all }) => (all ? '0rem' : '0.5rem')};
  }

  @media (max-width: 640px) {
    font-size: ${({ all }) => (all ? '1.6rem' : '1.5rem')};
  }

  @media (max-width: 560px) {
    padding: ${({ all }) => (all ? '11rem 0rem' : '2rem 0rem')};
    font-size: ${({ all }) => (all ? '1.4rem' : '1.3rem')};
    height: ${({ all }) => (all ? '30rem' : '14rem')};
    line-height: ${({ all }) => (all ? '3rem' : '4.7rem')};
  }

  @media (max-width: 500px) {
    font-size: ${({ all }) => (all ? '1.2rem' : '1.1rem')};
  }

  @media (max-width: 450px) {
    padding: ${({ all }) => (all ? '8rem 0rem' : '2rem 0rem')};
    font-size: ${({ all }) => (all ? '1rem' : '0.9rem')};
    height: ${({ all }) => (all ? '23rem' : '10rem')};
    line-height: ${({ all }) => (all ? '3rem' : '2.7rem')};
  }
`;
