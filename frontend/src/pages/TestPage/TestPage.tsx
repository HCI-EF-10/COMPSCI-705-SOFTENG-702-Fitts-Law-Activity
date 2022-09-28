import React from "react";
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <SettingsContainer menu={menu} />
      <MenuContainer handleClick={setMenu} />
      <FoodOptionsContainer
        onClick={() => {}}
        foodOptions={testFoodOptions}
        xSpacing={0}
        ySpacing={0}
        height={50}
        width={70}
      />
    </Box>
  );
}

export default TestPage;
