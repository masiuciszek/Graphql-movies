import { css } from 'styled-components';

interface Size {
  small: number;
  medium: number;
  large: number;
  xLarge: number;
}

const size: Size = {
  small: 500,
  medium: 960,
  large: 1140,
  xLarge: 1400,
} as const;

type CssParams = Parameters<typeof css>;
type StyleFnMap = Record<keyof Size, (...args: CssParams) => any>;

const typedKeys = <T extends {}>(obj: T) => Object.keys(obj) as Array<keyof T>;

const below = typedKeys(size).reduce((acc, label: keyof Size) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {} as StyleFnMap);

/* Object.keys() is typed as `string[]`. This function lets use slightly better typing. */
const above = typedKeys(size).reduce((acc, label: keyof Size) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {} as StyleFnMap);

type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';
type JustifyContent =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';
type AlignItems = 'center' | 'end' | 'flex-end' | 'flex-start' | 'stretch';

const handleFlex = (
  direction: FlexDirection,
  justifyContent: JustifyContent,
  alignItems: AlignItems,
) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
};

export { handleFlex, below, above };
