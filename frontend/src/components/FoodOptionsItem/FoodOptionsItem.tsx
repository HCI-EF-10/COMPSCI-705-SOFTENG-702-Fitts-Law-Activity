import React from 'react';
import { Grid, Typography } from "@mui/material";

interface Props {
  imgSrc: string;
  title: string;
  selected: boolean;
  onClick: () => void;
  height: number;
  width: number;
}

function FoodOptionsItem({imgSrc, title, selected, onClick, height, width}: Props) {

  return (
    <Grid item xs={6} justifyContent="center" alignItems="center" display="flex" flexDirection="column">
      <div
        style={{
          height: `${height}%`,
          width: `${width}%`,
          border: `2px solid ${selected ? "#FFE600" : "#00109B"}`,
          boxShadow: "0 0 10px 0",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3%"
        }}
        onClick={onClick}>
        <img style={{
          maxWidth: "100%",
          maxHeight: "100%",
        }} src={imgSrc}/>
      </div>
      <Typography variant="h6" style={{textAlign: "center", marginTop: "10px"}}>{title}</Typography>
    </Grid>
  );
}

export default FoodOptionsItem;