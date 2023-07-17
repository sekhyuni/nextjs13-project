import { styled } from 'styled-components';

import { ReactNode } from 'react';

const Main = ({ children }: { children: ReactNode }) => {
  return <StyledSection>{children}</StyledSection>;
};

const StyledSection = styled.section`
  ${({ theme }) => theme.MIXINS.flexBox('column')}
  width: 100%;
  height: 100vh;
  padding: 80px 0 20px;
`;

export default Main;
