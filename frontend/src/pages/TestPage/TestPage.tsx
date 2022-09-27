import React from 'react';
import {Grid} from "@mui/material";
import SettingsContainer from "../../components/SettingsContainer/SettingsContainer";
import MenuContainer from "../../components/MenuContainer/MenuContainer";
import FoodOptionsContainer from "../../components/FoodOptionContainer/FoodOptionsContainer";
import {FoodOption} from "../../util/Types/ApiTypes";

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
  const [menu, setMenu] = React.useState(1);

  return (
    <>
      <Grid
        container
      >
        <SettingsContainer menu={menu}></SettingsContainer>
        <MenuContainer handleClick={setMenu}></MenuContainer>
        <FoodOptionsContainer onClick={() => {
        }} foodOptions={testFoodOptions}/>
      </Grid>
    </>
  )
}

export default TestPage;