import React from 'react';
import * as S from './styles';
import {Menu} from 'styled-icons/boxicons-regular';

export default function MenuTrigger({menuIsOpen,setMenuIsOpen}){
    return <S.Container menuIsOpen={menuIsOpen}><Menu onClick={()=>setMenuIsOpen(!menuIsOpen)}/></S.Container>
}