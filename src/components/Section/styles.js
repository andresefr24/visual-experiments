import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  padding: 50px;
  height: 100%;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.primaryFont};
  font-size: ${({ theme }) => theme.h4}px;
  color: ${({ theme }) => theme.lighter};
  text-align: ${({ center }) => center && "center"};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
