import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import { CloseOutline } from "styled-icons/evaicons-outline";
import * as S from "./styles";
import ModalTitle from "../components/ModalTitle";
import useTheme from "../../../utils/useTheme";

Modal.setAppElement("#modal");

export default function GlobalModal({
  isOpen,
  setIsOpen,
  children,
  disabled,
  label,
  lightLayout,
  hideCloseButton,
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const theme = useTheme();

  const customStyles = {
    overlay: {
      backgroundColor: lightLayout
        ? "rgba(255,255,255,0.3)"
        : "rgba(0,0,0,0.3)",
      zIndex: 98,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderStyle: "none",
      fontFamily: "Open sans",
      textAlign: "justify",
      overflow: "visible",
      maxWidth: "100%",
      minWidth: 300,
      display: "flex",
      flexDirection: "column",
      width: isMobile ? "90%" : "auto",
      backgroundColor: theme.lighter,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        if (!disabled) setIsOpen(false);
      }}
      style={customStyles}
      closeTimeoutMS={200}
    >
      {!hideCloseButton && (
        <S.ButtonGroup>
          <CloseOutline onClick={() => setIsOpen(false)} />
        </S.ButtonGroup>
      )}
      {label && <ModalTitle label={label} />}
      {children}
    </Modal>
  );
}

GlobalModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  lightLayout: PropTypes.bool,
  hideCloseButton: PropTypes.bool,
};

GlobalModal.defaultProps = {
  isOpen: false,
  setIsOpen: () => {},
  children: {},
  disabled: false,
  label: undefined,
  lightLayout: false,
  hideCloseButton: false,
};
