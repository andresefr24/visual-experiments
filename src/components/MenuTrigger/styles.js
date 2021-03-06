import styled from "styled-components/macro";

export const Container = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 101;

  svg {
    width: 30px;
    height: 30px;
    color: ${({ theme, menuIsOpen }) =>
      menuIsOpen ? theme.darker : theme.lighter};
    cursor: pointer;
    transform: rotateZ(${({ menuIsOpen }) => (menuIsOpen ? 90 : 0)}deg);
    transition: all 0.2s;
  }
`;
