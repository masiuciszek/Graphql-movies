import { DefaultTheme } from 'styled-components';

export const mainTheme: DefaultTheme = {
  appSize: '10px',
  colors: {
    primary: 'rgba(142,36,170,1)',
    text: '#333',
    mainBg: '#fff',
    danger: '#E53935',
    warning: '#FFEE58',
    primaryShadow: 'rgba(142,36,170,.7)',
    secondaryShadow: 'rgba(0,0,0,0.5)',
  },
  size: {
    h1: '50px',
    h2: '40px',
    h3: '30px',
    h4: '27px',
    h5: '22px',
    p: '18px',
    a: '16px',
    maxWidth: '1100px',
  },
  shadow: {
    elevations: [
      'box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)',
      'box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)',
      'box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)',
      'box-shadow: 3px 2px rgba(42, 43, 49,.3)',
    ],
  },
  transition: {
    mainTransition: 'all .3s linear',
    secondaryTransition: 'all 1s ease',
    quickTransition: 'all 200ms ease-in-out',
  },
};
export const secondaryTheme: DefaultTheme = {
  appSize: '10px',
  colors: {
    primary: 'rgba(142,36,170,1)',
    text: '#fff',
    mainBg: '#333',
    danger: '#E53935',
    warning: '#FFEE58',
    primaryShadow: 'rgba(142,36,170,.7)',
    secondaryShadow: 'rgba(0,0,0,0.5)',
  },
  size: {
    h1: '50px',
    h2: '40px',
    h3: '30px',
    h4: '27px',
    h5: '22px',
    p: '18px',
    a: '16px',
    maxWidth: '1100px',
  },
  shadow: {
    elevations: [
      'box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)',
      'box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)',
      'box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)',
      'box-shadow: 3px 2px rgba(42, 43, 49,.3)',
    ],
  },
  transition: {
    mainTransition: 'all .3s linear',
    secondaryTransition: 'all 1s ease',
    quickTransition: 'all 200ms ease-in-out',
  },
};
