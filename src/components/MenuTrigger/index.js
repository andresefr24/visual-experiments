import React from "react";
import { Menu } from "styled-icons/boxicons-regular";
import * as S from "./styles";

export default function MenuTrigger({ menuIsOpen, setMenuIsOpen }) {
  return (
    <S.Container menuIsOpen={menuIsOpen}>
      <Menu onClick={() => setMenuIsOpen(!menuIsOpen)} />
    </S.Container>
  );
}
