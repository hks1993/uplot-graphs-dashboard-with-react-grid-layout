import styled from "styled-components";

export const Container = styled.div`
  width: ${(theme) => theme.maxWidth};
  justify-content: center;
  max-width: 100%;
  padding: 0 3em;
  margin: 0 auto;
`;

export const StyledButton = styled.button`
  padding: 1em 2em;
  margin: 1em;
  color: white;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme[props.color || "neutral"]};
`;
