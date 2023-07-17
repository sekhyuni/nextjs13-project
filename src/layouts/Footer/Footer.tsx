import { styled } from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCompanyName>(주)매스프레소</StyledCompanyName>
      <StyledCopyright>
        Copyright 2023 Mathpresso. All rights reserved.
      </StyledCopyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}
  padding: 30px 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray.eaeaea};
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledCompanyName = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
`;

const StyledCopyright = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray['747474']};
`;

export default Footer;
