import styled from "styled-components";
import { BoxProps, Setter } from "../types";
import MenuOption from "./MenuOption";

const Menu = ({
  height,
  width,
  scale,
  setHeight,
  setWidth,
  setScale,
}: BoxProps) => {
  const handleChangeSize = (value: number | number[], setter: Setter) => {
    if (typeof value === "number") {
      setter(value);
    } else {
      setter(value[0]);
    }
  };

  return (
    <Container>
      <MenuOption
        number={height}
        label="Height"
        handleChangeNumber={(_, value) => handleChangeSize(value, setHeight)}
      />
      <MenuOption
        number={width}
        label="Width"
        handleChangeNumber={(_, value) => handleChangeSize(value, setWidth)}
      />
      <MenuOption
        number={scale}
        label="Scale"
        handleChangeNumber={(_, value) => handleChangeSize(value, setScale)}
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
