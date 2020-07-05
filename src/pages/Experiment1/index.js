import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { SketchPicker } from "react-color";
import Default from "../layouts/default";
import Section from "../../components/Section";
import * as S from "./styles";
import GlobalModal from "../../components/Modals/GlobalModal";
import {
  baseSizeOptions,
  growthRatiosOptions,
  iconsOptions,
  numberOfShapesOptions,
} from "./utils";
import icons from "../../constants/icons";
import CustomSelect from "../../components/Select";

export default function Experiment1() {
  const [pieces, setPieces] = useState(numberOfShapesOptions[3]);
  const [ratio, setRatio] = useState(growthRatiosOptions[2]);
  const [baseSize, setBaseSize] = useState(baseSizeOptions[2]);

  const [pieceArray, setPieceArray] = useState([]);

  const [settingsIsOpen, setSettingsIsOpen] = useState(false);

  const [selectedIcon, setSelectedIcon] = useState(iconsOptions[0]);

  const [colorPickerIsOpen, setColorPickerIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#99ff99");

  useEffect(() => {
    const aux = [...Array(pieces.value)];
    setPieceArray(
      aux.map((piece, i) => ({
        size: `${ratio.value ** (i + 1) * baseSize.value}vw`,
      }))
    );
  }, [pieces, ratio, baseSize, setPieceArray]);

  return (
    <Default
      fromTop
      path="experiment-1"
      setSettingsIsOpen={setSettingsIsOpen}
      bg="black"
    >
      <Section>
        <S.BrushContainer
          onClick={() => setColorPickerIsOpen(!colorPickerIsOpen)}
        >
          {icons("brush")}
        </S.BrushContainer>
        {pieceArray.map(({ size }, index) => (
          <S.Piece
            key={v4()}
            size={size}
            index={index}
            pieces={pieces.value}
            color={selectedColor}
          >
            {icons(selectedIcon.value)}
          </S.Piece>
        ))}
      </Section>
      {colorPickerIsOpen && (
        <S.ColorPickerContainer>
          <SketchPicker
            color={selectedColor}
            onChange={(e) => setSelectedColor(e?.hex)}
          />
        </S.ColorPickerContainer>
      )}
      <GlobalModal
        isOpen={settingsIsOpen}
        setIsOpen={setSettingsIsOpen}
        label="Settings"
      >
        <CustomSelect
          label="Icon"
          value={selectedIcon}
          onChange={setSelectedIcon}
          options={iconsOptions}
        />
        <CustomSelect
          label="Number of shapes"
          value={pieces}
          onChange={setPieces}
          options={numberOfShapesOptions}
        />
        <CustomSelect
          label="Growth ratio"
          value={ratio}
          onChange={setRatio}
          options={growthRatiosOptions}
        />
        <CustomSelect
          label="Base size"
          value={baseSize}
          onChange={setBaseSize}
          options={baseSizeOptions}
        />
      </GlobalModal>
    </Default>
  );
}
