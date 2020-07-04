import React from 'react';
import * as S from './styles';
import MenuTrigger from "../MenuTrigger";

export default function Drawer({menuIsOpen, Trigger}){
    return <S.Container>
        <S.Drawer  menuIsOpen={menuIsOpen} width='30%'>
            </S.Drawer>
        <Trigger/>
    </S.Container>
}