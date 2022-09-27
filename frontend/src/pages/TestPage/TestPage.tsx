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
  },
  {
    imgSrc: require("../../images/burger.jpg"),
    title: "Burger",
    selected: false,
  },
  {
    imgSrc: require("../../images/burger.jpg"),
    title: "Burger",
    selected: false,
  },
  {
    imgSrc: require("../../images/burger.jpg"),
    title: "Burger",
    selected: false,
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
        } } foodOptions={testFoodOptions} xSpacing={-100} ySpacing={0} height={50} width={70}/>
      </Grid>
    </>
  )
}

export default TestPage;