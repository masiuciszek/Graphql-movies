import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../utils/theme';
import GlobalStyles from './GlobalStyles';
import { handleFlex } from '../styles/utils/helpers';

interface Props {
  children: React.ReactNode;
}

export const Page = styled.div`
  background: ${({ theme: { colors } }) => colors.mainBg};
  color: ${({ theme: { colors } }) => colors.text};
  height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1 auto;
  border: 2px solid red;
  margin: 0 auto;
  max-width: ${(props) => props.theme.size.maxWidth};
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Page>
        <Main>{children}</Main>
      </Page>
    </ThemeProvider>
  );
};
export default Layout;
