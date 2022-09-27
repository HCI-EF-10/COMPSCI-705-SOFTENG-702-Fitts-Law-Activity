import React from 'react';
import { Grid, Button } from "@mui/material";

function MenuContainer(props: any) {
    const buttonStyle = {
        maxWidth: '200px', maxHeight: '100px', minWidth: '200px', minHeight: '100px'
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
        <Button id="1" style={buttonStyle} variant="outlined" onClick={() => props.handleClick(1)}>MENU 1</Button>
        <Button id="2" style={buttonStyle} variant="outlined" onClick={() => props.handleClick(2)}>MENU 2</Button>
        <Button id="3" style={buttonStyle} variant="outlined" onClick={() => props.handleClick(3)}>MENU 3</Button>
        <Button id="4" style={buttonStyle} variant="outlined" onClick={() => props.handleClick(4)}>MENU 4</Button>
        </Grid>
    </Grid>
  );
}

export default MenuContainer;