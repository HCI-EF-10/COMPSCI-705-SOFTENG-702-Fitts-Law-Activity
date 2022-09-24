import React from 'react';
import { Grid } from "@mui/material";
import FoodOptionsItem from "../FoodOptionsItem/FoodOptionsItem";
import { FoodOption } from "../../util/Types/ApiTypes";

interface Props {
  foodOptions: FoodOption[];
  onClick: () => void;
  xSpacing: number;
  ySpacing: number;
  height: number;
  width: number;
}

function FoodOptionsContainer({foodOptions, onClick, xSpacing, ySpacing, height, width}: Props) {

  return (
    <Grid columnSpacing={xSpacing} rowSpacing={ySpacing} container>
      {foodOptions.map((foodOption, index) => (
        <FoodOptionsItem
          height={height}
          width={width}
          key={index}
          imgSrc={foodOption.imgSrc}
          title={foodOption.title}
          selected={foodOption.selected}
          onClick={onClick}
        />
      ))}
    </Grid>
  );
}

export default FoodOptionsContainer;