import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import MenuTrigger from "../../../components/MenuTrigger";
import Drawer from "../../../components/Drawer";
import { routes } from "../../../routes";
import SettingsTrigger from "../../../components/SettingsTrigger";

export default function Default({
  children,
  fromTop,
  drawerProps,
  path,
  bg,
  setSettingsIsOpen,
  ...rest
}) {
  const location = useLocation();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <S.Container fromTop={fromTop} bg={bg} {...rest}>
      <MenuTrigger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      {path?.includes("experiment") && (
        <SettingsTrigger setSettingsIsOpen={setSettingsIsOpen} />
      )}
      <Drawer
        {...drawerProps}
        routes={routes(location, path)}
        menuIsOpen={menuIsOpen}
      />
      {children}
    </S.Container>
  );
}
