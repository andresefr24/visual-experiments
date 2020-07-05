import React from "react";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import * as S from "./styles";

export default function Drawer({ menuIsOpen, routes }) {
  return (
    <S.Drawer menuIsOpen={menuIsOpen} width="30%">
      {routes.map(({ path, active, name }) => (
        <React.Fragment key={v4()}>
          {!active && (
            <Link to={path}>
              <S.Route>{name}</S.Route>
            </Link>
          )}
        </React.Fragment>
      ))}
    </S.Drawer>
  );
}
