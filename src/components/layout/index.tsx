import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { MessageProvider } from '../../context/message.context/Message.provider';
import { WordProvider } from '../../context/word.context/Word.provider';
import { mainTheme, secondaryTheme } from '../../utils/theme';
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
  const stored = localStorage.getItem('isDark');
  const [isDark, setIsDark] = React.useState(stored === 'true' ? true : false);

  return (
    <ThemeProvider theme={isDark ? secondaryTheme : mainTheme}>
      <WordProvider>
        <MessageProvider>
          <GlobalStyles />
          <Nav className='navbar' isDark={isDark} setIsDark={setIsDark} />
          <Page>
            <Main>{children}</Main>
          </Page>
        </MessageProvider>
      </WordProvider>
    </ThemeProvider>
  );
};
export default Layout;
