import React, {useState} from 'react';
import * as S from './styles';
import MenuTrigger from "../../../components/MenuTrigger";
import Drawer from "../../../components/Drawer";

export default function Default({children, fromTop, drawerProps,...rest}){
    const [menuIsOpen,setMenuIsOpen] = useState(false);
    return <S.Container fromTop={fromTop} {...rest}>
        <Drawer {...drawerProps} menuIsOpen={menuIsOpen} Trigger={()=>(<MenuTrigger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>)}/>
        {children}
    </S.Container>;
}