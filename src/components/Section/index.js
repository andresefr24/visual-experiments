import React from "react";
import * as S from "./styles";

export default function Section({ title, children, center, ...rest }) {
  return (
    <S.Container>
      <S.Content center>
        {title && <S.Title center>{title}</S.Title>}
        {children}
      </S.Content>
    </S.Container>
  );
}
