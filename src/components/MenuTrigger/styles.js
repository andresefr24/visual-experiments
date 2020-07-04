import styled from "styled-components";

export const Container = styled.div`
    width:50px;
    height:50px;
    position:absolute;
    left:0;
    top:0;  
    display:flex;
    align-items:center;
    justify-content:center;
    
    svg{
        width:30px;
        height:30px;
        color:${({theme,menuIsOpen})=>menuIsOpen?theme.darker:theme.lighter};
        cursor:pointer;
        transform: rotateZ(${({menuIsOpen})=>menuIsOpen?90:0}deg);
        transition: all 0.2s;
    }
`;