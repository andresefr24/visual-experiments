import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: ${({ fromTop }) => (fromTop ? "flex-start" : "center")};
  background-color: ${({ theme, bg }) => bg || theme.darker};
  position: relative;
  overflow: hidden;
`;
