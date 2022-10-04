import React from "react";
import { Box } from "@mui/material";
import SettingsContainer from "../../components/SettingsContainer/SettingsContainer";
import MenuContainer from "../../components/MenuContainer/MenuContainer";
import FoodOptionsContainer from "../../components/FoodOptionContainer/FoodOptionsContainer";
import { FoodOption, Menu } from "../../util/Types/ApiTypes";



const testMenus: Menu[] = [
  {

    title: "Menu",
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  },
  {

    title: "Menu",
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  },
  {

    title: "Menu",
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  },
  {

    title: "Menu",
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  },
]

function TestPage() {
  const [menu, setMenu] = React.useState(1);
  const [width1, setWidth1] = React.useState(100);
  const [width2, setWidth2] = React.useState(100);
  const [width3, setWidth3] = React.useState(100);
  const [width4, setWidth4] = React.useState(100);
  const [height1, setHeight1] = React.useState(100);
  const [height2, setHeight2] = React.useState(100);
  const [height3, setHeight3] = React.useState(100);
  const [height4, setHeight4] = React.useState(100);
  const widthArray = [width1, width2, width3, width4]
  const heightArray = [height1, height2, height3, height4]
  const setWidthArray = [setWidth1, setWidth2, setWidth3, setWidth4]
  const setHeightArray = [setHeight1, setHeight2, setHeight3, setHeight4]
  const testFoodOptions: FoodOption[] = [
    {
      imgSrc: require("../../images/burger.jpg"),
      title: "Burger",
      selected: false,
      width: width1,
      height: height1,
      x: 0,
      y: 0,
    },
    {
      imgSrc: require("../../images/burger.jpg"),
      title: "Burger",
      selected: false,
      width: width2,
      height: height2,
      x: 0,
      y: 0,
    },
    {
      imgSrc: require("../../images/burger.jpg"),
      title: "Burger",
      selected: false,
      width: width3,
      height: height3,
      x: 0,
      y: 0,
    },
    {
      imgSrc: require("../../images/burger.jpg"),
      title: "Burger",
      selected: false,
      width: width4,
      height: height4,
      x: 0,
      y: 0,
    },
  ]


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <SettingsContainer menu={menu} setWidthArray={setWidthArray} setHeightArray={setHeightArray} heightArray={heightArray} widthArray={widthArray} />
      <MenuContainer
        menus={testMenus}
        handleClick={setMenu}
        rowSpacing={100} />
      <FoodOptionsContainer
        onClick={() => { }}
        foodOptions={testFoodOptions}
        xSpacing={100}
        ySpacing={100}
        height={100}
        width={100}
      />
    </Box>
  );
}

export default TestPage;
