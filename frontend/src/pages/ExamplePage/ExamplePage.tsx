import React from 'react';
import CustomButton from "../../components/CustomButton/CustomButton";
import MenuSlider from "../../components/MenuSlider/MenuSlider";
import HelpIcon from '@mui/icons-material/Help';
import HTMLTooltip from '../../components/HTMLTooltip/HTMLTooltip';
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

function ExamplePage() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <CustomButton onClick={() => console.log("test")}>Test</CustomButton>
      <div style={{ width: "500px" }}>
        <MenuSlider min={0} max={100} value={value} onChange={(value) => setValue(value)} menuText="Test" />
        <div style={{ display: 'flex', margin: '100px' }}>
          <HTMLTooltip button={<HelpIcon />} htmlFrag={
            <div>
              <h1>Testing the hover functionality</h1>
              Switching over from custom hover to MUI tooltips wrapper for a cleaner look with less styling
            </div>} />
        </div>
      </div>
      <FoodOptionsContainer onClick={() => {
      }} foodOptions={testFoodOptions}/>
    </>
  )
}

export default ExamplePage;