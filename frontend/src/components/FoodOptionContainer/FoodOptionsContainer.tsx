import React from 'react';
import {Grid} from "@mui/material";
import FoodOptionsItem from "../FoodOptionsItem/FoodOptionsItem";
import {FoodOption} from "../../util/Types/ApiTypes";

interface Props {
  foodOptions: FoodOption[];
  onClick: () => void;
}

function FoodOptionsContainer({foodOptions, onClick}: Props) {

  return (
    <Grid container sx={{height: "500px", width: "500px"}}>
      {foodOptions.map((foodOption, index) => (
        <FoodOptionsItem
          key={index}
          imgSrc={foodOption.imgSrc}
          title={foodOption.title}
          selected={foodOption.selected}
          onClick={onClick}
          height={foodOption.height}
          width={foodOption.width}
          x={foodOption.x}
          y={foodOption.y}
        />
      ))}
    </Grid>
  );
}

export default FoodOptionsContainer;