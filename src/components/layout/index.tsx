import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../utils/theme';
import GlobalStyles from './GlobalStyles';
import { handleFlex } from '../styles/utils/helpers';

interface Props {
  children: React.ReactNode;
}

export const Page = styled.div`
  max-width: ${(props) => props.theme.size.maxWidth};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 2px solid green;
  ${handleFlex('column', 'center', 'center')}
`;

const Main = styled.main`
  flex-grow: 1 auto;
  height: 100%;
  width: 100%;
  border: 2px solid red;
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
