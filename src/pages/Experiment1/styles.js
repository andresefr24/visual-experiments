import styled, { keyframes } from "styled-components/macro";
import { darken } from "polished";

const asd = keyframes`
    0%{transform:translate(-30%, -30%) rotateZ(0deg);}
    50%{transform:translate(-30%, -30%) rotateZ(360deg);}
    100%{transform:translate(-30%, -30%) rotateZ(0deg);}
}`;

export const Piece = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  z-index: ${({ index, pieces }) => pieces - index + 1};
  transform: translate(-30%, -30%) rotateZ(0deg);
  animation: ${asd} 20s linear infinite;
  animation-delay: ${({ index }) => (index + 1) * 0.15}s;

  svg {
    width: 100%;
    height: 100%;
    color: ${({ index, pieces, color }) =>
      darken((0.7 / pieces) * (index + 1), color)};
  }
`;

export const BrushContainer = styled.div`
  position: fixed;
  top: 0;
  right: 50px;
  height: 50px;
  width: 50px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    height: 27px;
    width: 27px;
    color: ${({ theme }) => theme.lighter};
  }
`;

export const ColorPickerContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 99;
`;

// C09BD8
