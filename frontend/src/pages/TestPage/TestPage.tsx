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
  const [foodWidth1, setFoodWidth1] = React.useState(0);
  const [foodHeight1, setFoodHeight1] = React.useState(0);
  const [foodXSpacing1, setFoodXSpacing1] = React.useState(0);
  const [foodYSpacing1, setFoodYSpacing1] = React.useState(0);
  const [foodWidth2, setFoodWidth2] = React.useState(0);
  const [foodHeight2, setFoodHeight2] = React.useState(0);
  const [foodXSpacing2, setFoodXSpacing2] = React.useState(0);
  const [foodYSpacing2, setFoodYSpacing2] = React.useState(0);
  const [foodWidth3, setFoodWidth3] = React.useState(0);
  const [foodHeight3, setFoodHeight3] = React.useState(0);
  const [foodXSpacing3, setFoodXSpacing3] = React.useState(0);
  const [foodYSpacing3, setFoodYSpacing3] = React.useState(0);  
  const [foodWidth4, setFoodWidth4] = React.useState(0);
  const [foodHeight4, setFoodHeight4] = React.useState(0);
  const [foodXSpacing4, setFoodXSpacing4] = React.useState(0);
  const [foodYSpacing4, setFoodYSpacing4] = React.useState(0);

  const foodHeights = [foodHeight1, foodHeight2, foodHeight3, foodHeight4];
  const foodWidths = [foodWidth1, foodWidth2, foodWidth3, foodWidth4];
  const foodXSpacings = [foodXSpacing1, foodXSpacing2, foodXSpacing3, foodXSpacing4];
  const foodYSpacings = [foodYSpacing1, foodYSpacing2, foodYSpacing3, foodYSpacing4];
  const setFoodWidths = [setFoodWidth1, setFoodWidth2, setFoodWidth3, setFoodWidth4];
  const setFoodHeights = [setFoodHeight1, setFoodHeight2, setFoodHeight3, setFoodHeight4];
  const setFoodXSpacings = [setFoodXSpacing1, setFoodXSpacing2, setFoodXSpacing3, setFoodXSpacing4];
  const setFoodYSpacings = [setFoodYSpacing1, setFoodYSpacing2, setFoodYSpacing3, setFoodYSpacing4];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <SettingsContainer menu={menu} widths={foodWidths} heights={foodHeights} xSpacings={foodXSpacings} ySpacings={foodYSpacings}
        setWidths={setFoodWidths} setHeights={setFoodHeights} setXSpacings={setFoodXSpacings} setYSpacings={setFoodYSpacings} />

      <MenuContainer
        handleClick={setMenu}
        rowSpacing={100}
        buttonWidth={100}
        buttonHeight={100}
      />
      
      <FoodOptionsContainer
        layout={menu}
        onClick={() => { }}
        foodOptions={testFoodOptions}
        xSpacing={foodXSpacings[menu - 1]}
        ySpacing={foodYSpacings[menu - 1]}
        height={foodHeights[menu - 1]}
        width={foodWidths[menu - 1]}
      />
    </Box>
  );
}

export default TestPage;
