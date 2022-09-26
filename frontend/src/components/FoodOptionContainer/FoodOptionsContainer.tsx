import React from 'react';
import {Grid, Button} from "@mui/material";
import FoodOptionsItem from "../FoodOptionsItem/FoodOptionsItem";
import {FoodOption} from "../../util/Types/ApiTypes";
import { useNavigate } from "react-router-dom";

interface Props {
  foodOptions: FoodOption[];
  onClick: () => void;
}

function FoodOptionsContainer({ foodOptions, onClick }: Props) {
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Grid container sx={{ height: "100vh", width: "600px", backgroundColor: 'white' }}>
      <Grid container
        direction="column"
        padding="15px">
        <h1 style={{ textAlign: "center" }}>Food options</h1>
      </Grid>
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
      <Grid container
        direction="column"
        padding="15px">
        <Button
          variant="contained"
          sx={{
            marginTop: "5rem",
            fontSize: "1rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            borderRadius: "10rem",
          }}
          onClick={handleNavigate}
        >
          CHECKOUT
          </Button>
      </Grid>
    </Grid>
  );
}

export default FoodOptionsContainer;