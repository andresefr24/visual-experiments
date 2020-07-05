import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import * as S from "./styles";

export default function CustomSelect({ label, width, setValue, ...rest }) {
  return (
    <S.Container width={width}>
      <S.Label>{label}</S.Label>
      <Select
        {...rest}
        setValue={(e) => setValue(e.target.value)}
        classPrefix="custom-select"
      />
    </S.Container>
  );
}

CustomSelect.propTypes = {
  label: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setValue: PropTypes.func,
};

CustomSelect.defaultProps = { label: "", width: undefined, setValue: () => {} };
