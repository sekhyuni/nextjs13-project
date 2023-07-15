import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    white: '#ffffff',
    purple: {
      400: '#8825ff',
      blue: '#6619c2',
    },
    gray: {
      200: '#e1e1e1',
      400: '#707070',
      pale: '#f9f9fb',
      'light-blue': '#a8acb6',
      purplish: '#6a676c',
      charcoal: '#333337',
    },
    black: '#000000',
    background: {
      pink: '#ee0661',
      orange: '#ff9003',
      yellow: '#ffcc02',
      'sky-blue': '#33cbcb',
      'purple-blue': '#6619c2',
    },
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const MIXINS = {
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  // positions
  positionCenter: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    return;
  },
};

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};

export default theme;
