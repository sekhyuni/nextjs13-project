import { styled } from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <div>QANDA TEAM LOGO</div>
      <nav>NAV AREA</nav>
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

export default Header;
