import styled from "styled-components/macro";

export const Container = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 101;

  svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.lighter};
    cursor: pointer;
    transition: all 0.2s;
  }
`;
