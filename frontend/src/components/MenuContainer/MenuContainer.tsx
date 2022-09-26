import React from 'react';
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MenuContainer() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
      <Grid container sx={{ height: "100vh", width: "300px", backgroundColor: '#fec795' }}>
        
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        padding = "15px"
          >
        <h1 style={{ textAlign: "center" }}>Menus</h1>
        <Button style={{ maxWidth: '200px', maxHeight: '100px', minWidth: '200px', minHeight: '100px' }} variant="outlined" onClick={handleNavigate}>MENU 1</Button>
        <Button style={{ maxWidth: '200px', maxHeight: '100px', minWidth: '200px', minHeight: '100px' }} variant="outlined" onClick={handleNavigate}>MENU 2</Button>
        <Button style={{ maxWidth: '200px', maxHeight: '100px', minWidth: '200px', minHeight: '100px' }} variant="outlined" onClick={handleNavigate}>MENU 3</Button>
        <Button style={{ maxWidth: '200px', maxHeight: '100px', minWidth: '200px', minHeight: '100px' }} variant="outlined" onClick={handleNavigate}>MENU 4</Button>
        </Grid>
    </Grid>
  );
}

export default MenuContainer;