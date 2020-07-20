import styled from 'styled-components';
import { Button } from '../../styles/Buttons';
import { handleFlex } from '../../styles/utils/helpers';
import { animated } from 'react-spring';

export const StyledNavList = styled.ul`
  ${handleFlex('row', 'space-between', 'center')};

  flex: 1;
`;

export const ListBtn = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  margin: 0;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

type ToggleType = {
  isDark: boolean;
};

export const ToggleThemeWrapper = styled.div<ToggleType>`
  ${handleFlex('row', 'space-between', 'center')};
  padding: 0 3rem;
  .slide {
    width: 15rem;
  }
`;

export const Knob = styled(animated.div)`
  border: 2px solid ${(props) => props.theme.colors.secondaryShadow};
  background: ${(props) => props.theme.colors.secondaryShadow};
  border-radius: 1rem;
  width: 70%;
  height: 4rem;
  display: block;
  font-size: 2rem;
  cursor: pointer;
  padding: 0 0.3rem;
`;
