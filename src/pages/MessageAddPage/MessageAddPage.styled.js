import styled from '@emotion/styled';
import colors from '../../styles/colors';
import arrowDownIcon from '../../assets/images/icons/arrow_down.svg';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  form {
    width: 100%;
    max-width: 45rem;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 3.125rem;
  margin-top: 2.94rem;
  margin-bottom: 3.87rem;
`;

export const Profiles = styled.ul`
  display: flex;
  gap: 0.4rem;
  margin-top: 1rem;
`;

export const Profile = styled.li`
  border-radius: 50%;
  border: ${(props) => (props.isSelected ? `0.13rem solid ${colors['--Purple-600']}` : 'none')};
  transform: ${(props) => (props.isSelected ? 'translate(0, -0.13rem)' : 'none')};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${colors['--Gray-300']};
`;

export const Select = styled.div`
  position: relative;
  width: 100%;
  max-width: 20rem;
  cursor: pointer;

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(${arrowDownIcon}) no-repeat 97% 50% / auto;
    border-radius: 0.5rem;
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid ${colors['--Gray-300']};

    &:focus {
      outline: none;
      border: 2px solid ${colors['--Gray-500']};
    }
  }
`;

export const Label = styled.label`
  color: ${colors['--Gray-900']};
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 2.25rem;
  letter-spacing: -0.015rem;
  display: inline-block;
  margin-bottom: 0.75rem;
`;

export const TextEditor = styled.div`
  .toastui-editor-contents {
    font-size: 1.125rem;
    font-family: ${({ font }) => font};
  }
  @media (max-width: 570px) {
    max-width: 20rem;
  }
`;
