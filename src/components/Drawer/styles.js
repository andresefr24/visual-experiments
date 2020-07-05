import styled from "styled-components";

export const Drawer = styled.div`
  position: fixed;
  width: ${({ width }) => width};
  height: 100%;
  top: 0;
  left: -${({ width }) => width};
  background-color: ${({ theme }) => theme.lighter};
  transform: translateX(${({ menuIsOpen }) => (menuIsOpen ? "100%" : 0)});
  transition: all 0.2s;
  padding: 50px 18px 10px 18px;
  z-index: 100;

  a {
    font-size: ${({ theme }) => theme.h6}px;
    font-family: ${({ theme }) => theme.primaryFont};
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Route = styled.div`
  height: 40px;
  width: 100%;
  color: ${({ theme }) => theme.darker};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
