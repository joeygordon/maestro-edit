import styled from 'styled-components';
import Image from 'next/image';

import arLogo from '../public/images/ar-logo.png';

const LayoutContainer = styled.div`
  max-width: 40em;
  padding: 2.5rem;
  margin: 4rem auto 6rem;
  background: #151515;

  background: linear-gradient(to right top, #222222, #151515) fixed;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3em;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 35px;
  margin-right: 1em;
`;

const MainTitle = styled.h1`
  color: #ffffff;
  margin: 0;
  padding: 0;
  font-weight: 300;
`;

const HelpButton = styled.button`
  border-radius: 50%;
  border: none;
  background: #666666;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.8em;
  font-weight: bold;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <TitleContainer>
        <LogoContainer>
          <Logo>
            <Image src={arLogo} alt='Acid Rain Logo' layout='responsive' />
          </Logo>
          <MainTitle>Maestro Edit</MainTitle>
        </LogoContainer>
        <HelpButton type='button'>?</HelpButton>
      </TitleContainer>

      <div>{children}</div>
    </LayoutContainer>
  );
};

export default Layout;
