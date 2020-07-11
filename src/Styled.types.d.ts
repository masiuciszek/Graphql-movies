import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    appSize: string;
    colors: {
      primary: string;
      text: string;
      mainBg: string;
      danger: string;
      warning: string;
      primaryShadow: string;
      secondaryShadow: string;
    };
    size: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      p: string;
      a: string;
      maxWidth: string;
    };
    shadow: {
      elevations: Array<string>;
    };
    transition: {
      mainTransition: string;
      secondaryTransition: string;
      quickTransition: string;
    };
  }
}
