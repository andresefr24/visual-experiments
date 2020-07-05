import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

export default function ModalTitle({ label }) {
  return (
    <S.TitleContainer>
      <S.Title>{label}</S.Title>
    </S.TitleContainer>
  );
}

ModalTitle.propTypes = {
  label: PropTypes.string.isRequired,
};
