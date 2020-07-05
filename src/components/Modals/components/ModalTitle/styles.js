import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-family: "Open sans";
  font-size: ${({ theme }) => theme.h5}px;
  color: ${({ theme }) => theme.darker};
  font-weight: 700;
  &:first-letter {
    text-transform: uppercase;
  }
`;
