import styled from "styled-components";

const LayoutContainer = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const MainTitle = styled.h1`
  color: rebeccapurple;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <MainTitle>Maestro Edit</MainTitle>

      <div>{children}</div>
    </LayoutContainer>
  );
};

export default Layout;
