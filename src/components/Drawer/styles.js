import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100%;
    position:fixed;   
`;

export const Drawer = styled.div`
    position:absolute;
    width:${({width})=>width};
    height:100%;
    top:0;
    left:-${({width})=>width};
    background-color:${({theme})=>theme.lighter};
    transform: translateX(${({menuIsOpen})=>menuIsOpen?'100%':0});
    transition: all 0.2s;
`;