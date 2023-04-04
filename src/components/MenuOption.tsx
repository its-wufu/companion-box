import styled from "styled-components";
import { Slider } from "@mui/material";
import debounce from "lodash.debounce";

type Props = {
  number: number;
  handleChangeNumber: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
  label: string;
  min?: number;
  max?: number;
};

const MenuOption = ({ number, handleChangeNumber, label, min, max }: Props) => {
  return (
    <OptionBox>
      <Label>
        {label}: {Math.round(number * 10) / 10}
      </Label>
      <Slider
        aria-label={label}
        value={number}
        onChange={debounce(handleChangeNumber, 50)}
        min={min || 1}
        max={max || 7}
        valueLabelDisplay="off"
        sx={{ width: "80%" }}
        step={0.1}
      />
    </OptionBox>
  );
};

const OptionBox = styled.div`
  width: 100%;
  height: 150px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  font-size: 20px;
  color: white;
`;

export default MenuOption;
