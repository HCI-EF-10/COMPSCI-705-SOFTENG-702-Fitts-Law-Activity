import React from 'react';
import { Box, Grid } from "@mui/material";
import SettingsContainer from "../../components/SettingsContainer/SettingsContainer";
import MenuContainer from "../../components/MenuContainer/MenuContainer";
import FoodOptionsContainer from "../../components/FoodOptionContainer/FoodOptionsContainer";
import { FoodOption } from "../../util/Types/ApiTypes";

const testFoodOptions: FoodOption[] = [
  {
    imgSrc: require("../../images/burger.jpg"),
    title: "Burger",
    selected: false,
    width: 200,
    height: 100,
    x: 0,
    y: 0,
  },
  {
    imgSrc: require("../../images/burger.jpg"),
    title: "Burger",
    selected: false,
    width: 200,
    height: 100,
    x: 0,
    y: 0,
  },
  {
    imgSrc: require("../../images/burger.jpg"),
    title: "Burger",
    selected: false,
    width: 200,
    height: 100,
    x: 0,
    y: 0,
  },
  {
    imgSrc: require("../../images/burger.jpg"),
    title: "Burger",
    selected: false,
    width: 200,
    height: 100,
    x: 0,
    y: 0,
  },
]

function TestPage() {

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        >
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <SettingsContainer></SettingsContainer>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <MenuContainer></MenuContainer>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <FoodOptionsContainer onClick={() => {
        }} foodOptions={testFoodOptions}/>
        </Box>
      </Grid>
    </>
  )
}

export default TestPage;