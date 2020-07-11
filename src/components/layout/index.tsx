import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../utils/theme';
import GlobalStyles from './GlobalStyles';

interface Props {
  children: React.ReactNode;
}

export const Page = styled.div`
  max-width: ${(props) => props.theme.size.maxWidth};
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Main = styled.main`
  flex-grow: 1 auto;
  height: 100%;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};
export default Layout;
