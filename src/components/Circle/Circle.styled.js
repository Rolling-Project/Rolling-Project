import styled from '@emotion/styled';
import colors from '../../styles/colors';

const Circle = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${colors['--White']};
  border-radius: 50%;
  border: ${({ hasBorder }) => (hasBorder ? `0.08rem solid ${colors['--White']}` : 'none')};
  overflow: hidden;
`;

export default Circle;
