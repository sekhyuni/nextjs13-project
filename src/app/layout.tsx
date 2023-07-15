'use client';

import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from './lib/registry';

import { GlobalStyles } from '~styles/global';
import theme from '~styles/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
