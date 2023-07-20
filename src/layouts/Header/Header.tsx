import { styled } from 'styled-components';

import Link from 'next/link';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link href={'/'}>Some Company LOGO</Link>
      </div>
      <StyledNav>
        <Link href={'/static'}>Static 페이지로 가기</Link>
        <Link href={'/dynamic'}>Dynamic 페이지로 가기</Link>
      </StyledNav>
      <div>LANGUAGES AREA</div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}
  width: 100%;
  height: 80px;
  padding: 0 40px;
  z-index: 1001;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}
  gap: 10px;
`;

export default Header;
