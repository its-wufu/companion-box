import styled from "styled-components";
import { Slider } from "@mui/material";
import debounce from "lodash.debounce";
import { useState, useEffect, useCallback } from "react";

type Props = {
  number: number;
  handleChangeNumber: (value: number) => void;
  label: string;
  min?: number;
  max?: number;
};

const MenuOption = ({ number, handleChangeNumber, label, min, max }: Props) => {
  const [value, setValue] = useState(number); // Hack because of the debounce T_T

  const onChangeHandler = useCallback(
    (_: Event, newValue: number | number[]) => {
      if (typeof newValue === "number") {
        setValue(newValue);
      } else {
        setValue(newValue[0]);
      }
    },
    []
  );

  useEffect(() => {
    const debouncedHandler = debounce(() => handleChangeNumber(value), 50);
    debouncedHandler();
    return () => debouncedHandler.cancel();
  }, [handleChangeNumber, value]);

  return (
    <OptionBox>
      <Label>
        {label}: {Math.round(value * 10) / 10}
      </Label>
      <Slider
        aria-label={label}
        value={value}
        onChange={onChangeHandler}
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
