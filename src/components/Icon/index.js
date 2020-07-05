import React from "react";
import PropTypes from "prop-types";
import icons from "../../constants/icons";
import * as S from "./styles";

export default function Icon({ type, iconSize, ...rest }) {
  return (
    <S.IconContainer {...rest} size={iconSize}>
      {icons(type)}
    </S.IconContainer>
  );
}

Icon.propTypes = { type: PropTypes.string, iconSize: PropTypes.number };

Icon.defaultProps = { type: undefined, iconSize: undefined };
