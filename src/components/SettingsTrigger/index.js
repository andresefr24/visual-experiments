import React from "react";
import { Cog } from "styled-icons/heroicons-solid";
import * as S from "./styles";

export default function SettingsTrigger({ setSettingsIsOpen }) {
  return (
    <S.Container>
      <Cog onClick={() => setSettingsIsOpen(true)} />
    </S.Container>
  );
}
