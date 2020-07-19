import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../utils/theme';
import GlobalStyles from './GlobalStyles';
import Nav from './nav';

interface Props {
  children: React.ReactNode;
}

export const Page = styled.div`
  background: ${({ theme: { colors } }) => colors.mainBg};
  color: ${({ theme: { colors } }) => colors.text};
  height: 100vh;
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: ${(props) => props.theme.size.maxWidth};
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Nav className='navbar' />
      <Page>
        <Main>{children}</Main>
      </Page>
    </ThemeProvider>
  );
};
export default Layout;
