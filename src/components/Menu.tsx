import styled from "styled-components";
import { BoxProps } from "../types";
import MenuOption from "./MenuOption";

const Menu = ({
  height,
  width,
  scale,
  setHeight,
  setWidth,
  setScale,
}: BoxProps) => {
  return (
    <Container>
      <MenuOption
        number={height}
        label="Height"
        handleChangeNumber={setHeight}
      />
      <MenuOption number={width} label="Width" handleChangeNumber={setWidth} />
      <MenuOption
        number={scale}
        label="Scale"
        handleChangeNumber={setScale}
        min={0}
        max={2}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #202023;
  padding: 32px;
`;

export default Menu;
