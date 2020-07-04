import React from 'react';
import * as S from './styles';

export default function Section({title,children,...rest}){
return <S.Container>
    <S.Title>{title}</S.Title>
    <S.Content>
        {children}
    </S.Content>
</S.Container>
}