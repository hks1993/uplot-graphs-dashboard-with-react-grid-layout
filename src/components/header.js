import styled from "styled-components";
import { Container } from "./styled/containerStyled";

const StyledHeadding = styled.h2`
  color: black;
  font-weight: 400;
  margin: 0;
`;
const StyledHeader = styled.div`
  width: 100%;
  padding: 1em;
  background-color: ${({ theme }) => theme?.background?.header};
  display: flex;
  align-items: center;
`;
export const Header = (props) => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeadding>Charts Playground</StyledHeadding>
      </Container>
    </StyledHeader>
  );
};
