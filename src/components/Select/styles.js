import styled from "styled-components/macro";

export const Container = styled.div`
  width: ${({ width }) => width || "100%"};
  padding: 10px;
  div {
    div {
      border-radius: 0;
      border-width: 0 0 1px 0;
      border-color: ${({ theme }) => theme.black};
      font-size: ${({ theme }) => theme.paragraph}px;
      font-family: "Open Sans", sans-serif;
      padding-left: 3px;
      div {
        padding: 0px;
      }
    }
  }
  .react-select__control {
    background-color: transparent;
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__menu {
    background-color: ${({ theme }) => theme.lighter};
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.paragraph}px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  &:first-letter {
    text-transform: uppercase;
  }
`;
