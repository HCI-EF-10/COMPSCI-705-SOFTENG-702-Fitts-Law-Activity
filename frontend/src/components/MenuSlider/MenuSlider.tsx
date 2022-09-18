import React from 'react';
import { styled } from "@mui/material/styles";
import { Slider, Typography, typographyClasses } from "@mui/material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  [`&.${typographyClasses.root}`]: {
    fontSize: 20,
  },
}));


interface Props {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  menuText: string;
}

function MenuSlider({min, max, value, onChange, menuText}: Props) {

  const handleChange = (event: Event, newValue: number | number[]) => {
    onChange(newValue as number);
  };

  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <StyledTypography>{menuText}</StyledTypography>
      <Slider sx={{width: "80%"}} value={value} onChange={handleChange} min={min} max={max}/>
    </div>
  )
}

export default MenuSlider;