'use client';

import { ThemeProvider } from 'styled-components';

import { ReactNode } from 'react';

import StyledComponentsRegistry from './lib/registry';

import Header from '~layouts/Header/Header';
import Main from '~layouts/Main/Main';
import Footer from '~layouts/Footer/Footer';

import { GlobalStyles } from '~styles/global';
import theme from '~styles/theme';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <meta name='description' content='Next.js 13 Version Project' />
        <title>Next.js 13 Version Project</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
