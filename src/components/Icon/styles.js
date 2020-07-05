import styled from "styled-components/macro";

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => size || 10}px;
  width: ${({ size }) => size || 10}px;

  svg {
    color: ${({ theme, color }) => theme[color] || "black"};
    height: ${({ size }) => size || 10}px;
    width: ${({ size }) => size || 10}px;
    ${({ animated, animation }) => animated && animation};
    transition: all 0.3s;
  }
`;
