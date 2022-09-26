import React from 'react';
import { Grid, Button } from "@mui/material";
import MenuSlider from "../../components/MenuSlider/MenuSlider";
import { useNavigate } from "react-router-dom";

function SettingsContainer() {
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [xPos, setXPos] = React.useState(0);
  const [yPos, setYPos] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [clicks, setClicks] = React.useState(0);
  const [errors, setErrors] = React.useState(0);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Grid container sx={{ height: "100vh", width: "520px", backgroundColor: '#d4edfc' }}>
      <Grid container
        direction="column"
        padding="15px">
        <h1 style={{ textAlign: "center" }}>Settings</h1>
        <h3>Selected component: Menu item 1</h3>
        <h4>Component Properties</h4>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
        padding="15px">
        <MenuSlider min={0} max={100} value={height} onChange={(height) => setHeight(height)} menuText="Height" />
        <MenuSlider min={0} max={100} value={width} onChange={(width) => setWidth(width)} menuText="Width" />
        <MenuSlider min={0} max={100} value={xPos} onChange={(xPos) => setXPos(xPos)} menuText="X Position" />
        <MenuSlider min={0} max={100} value={yPos} onChange={(yPos) => setYPos(yPos)} menuText="Y Position" />
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding="15px">
        <h2>Fitts’ Law Score: { score }</h2>
        <h2>Number of clicks: { clicks }</h2>
        <h2>Errors: { errors }</h2>
      </Grid>
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        padding="15px">
        <Button variant='contained' onClick={handleNavigate}>EDIT MODE</Button>
        <Button variant='contained' onClick={handleNavigate}>RUN TEST</Button>
        <Button variant='contained' onClick={handleNavigate}>VIEW MODE</Button>
        <Button variant='contained' onClick={handleNavigate}>INSTRUCTIONS</Button>
      </Grid>
    </Grid>
  );
}

export default SettingsContainer;