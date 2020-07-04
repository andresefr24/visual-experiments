import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    padding:50px;
`;

export const Title = styled.p`
    font-family:${({theme})=>theme.primaryFont};
    font-size: ${({theme})=>theme.h4}px;
    color: ${({theme})=>theme.lighter};
`;

export const Content = styled.div``;