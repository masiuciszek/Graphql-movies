import styled from 'styled-components';
import { Button } from '../../styles/Buttons';
import { handleFlex } from '../../styles/utils/helpers';

export const StyledNavList = styled.ul`
  ${handleFlex('row', 'space-between', 'center')};
  border: 2px solid red;
  flex: 1;
`;

export const ListBtn = styled(Button)`
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ToggleThemeWrapper = styled.div`
  ${handleFlex('row', 'space-between', 'center')};
  padding: 0 3rem;

  .slide {
    border: 2px solid blue;
    padding: 0.5rem;
    width: 15rem;
    position: relative;
    height: 7rem;
  }
  #knob {
    border: 2px solid green;
    width: 50%;
    padding: 0.5rem;
    display: inline-block;
    font-size: 2rem;
    cursor: pointer;
    position: absolute;
    left: 0;
  }
`;
