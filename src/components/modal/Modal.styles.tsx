import styled from 'styled-components';
import { animated } from 'react-spring';
import { handleFlex } from '../styles/utils/helpers';

export const ModalStyles = styled(animated.section)`
  background: ${({ theme }) => theme.colors.primaryShadow};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${handleFlex('row', 'center', 'center')};
`;

export const ModalBody = styled.div`
  background: ${({ theme }) => theme.colors.mainBg};
  padding: 2rem 4rem;
  height: 50%;
  width: 50%;
  ${handleFlex('column', 'center', 'center')};
  box-shadow: ${(props) => props.theme.colors.primary} 2px 3px 5px;
  border-radius: 0.3rem;
`;
