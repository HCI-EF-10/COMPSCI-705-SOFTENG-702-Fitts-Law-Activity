import React from "react";
import { Box } from "@mui/material";
import SettingsContainer from "../../components/SettingsContainer/SettingsContainer";
import MenuContainer from "../../components/MenuContainer/MenuContainer";
import FoodOptionsContainer from "../../components/FoodOptionContainer/FoodOptionsContainer";
import { FoodOption } from "../../util/Types/ApiTypes";

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
];

function TestPage() {
  const [menu, setMenu] = React.useState(1);
  const [foodWidth, setFoodWidth] = React.useState(0);
  const [foodHeight, setFoodHeight] = React.useState(0);
  const [foodXSpacing, setFoodXSpacing] = React.useState(0);
  const [foodYSpacing, setFoodYSpacing] = React.useState(0);


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <SettingsContainer menu={menu} width={foodWidth} height={foodHeight} xSpacing={foodXSpacing} ySpacing={foodYSpacing}
        setWidth={setFoodWidth} setHeight={setFoodHeight} setXSpacing={setFoodXSpacing} setYSpacing={setFoodYSpacing} />

      <MenuContainer
        handleClick={setMenu}
        rowSpacing={100}
        buttonWidth={100}
        buttonHeight={100}
      />
      
      <FoodOptionsContainer
        onClick={() => { }}
        foodOptions={testFoodOptions}
        xSpacing={foodXSpacing}
        ySpacing={foodYSpacing}
        height={foodHeight}
        width={foodWidth}
      />
    </Box>
  );
}

export default TestPage;
