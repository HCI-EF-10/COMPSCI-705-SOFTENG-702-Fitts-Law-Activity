import React from 'react';
import CustomButton from "../../components/CustomButton/CustomButton";
import MenuSlider from "../../components/MenuSlider/MenuSlider";
import HoverIcon from '../../components/HoverIcon/HoverIcon';
import HelpIcon from '@mui/icons-material/Help';
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
]

function ExamplePage() {
  const [xSpacing, setXSpacing] = React.useState(0);
  const [ySpacing, setYSpacing] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  return (
    <>
      <CustomButton onClick={() => console.log("test")}>Test</CustomButton>
      <div style={{width: "60%"}}>
        <MenuSlider min={0} max={10} value={xSpacing} onChange={(value) => setXSpacing(value)} menuText="X spacing"/>
        <MenuSlider min={0} max={10} value={ySpacing} onChange={(value) => setYSpacing(value)} menuText="Y spacing"/>
        <MenuSlider min={0} max={100} value={width} onChange={(value) => setWidth(value)} menuText="Width"/>
        <MenuSlider min={0} max={100} value={height} onChange={(value) => setHeight(value)} menuText="Height"/>
        <HoverIcon icon={<HelpIcon/>} onHover={<div>test</div>}/>
      </div>
      <div style={{width: "50%"}}>
        <FoodOptionsContainer width={width} height={height} xSpacing={xSpacing} ySpacing={ySpacing} onClick={() => {
        }} foodOptions={testFoodOptions}/>
      </div>
    </>
  )
}

export default ExamplePage;