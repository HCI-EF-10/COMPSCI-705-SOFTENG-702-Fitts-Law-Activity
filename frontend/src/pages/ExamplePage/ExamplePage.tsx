import React from 'react';
import CustomButton from "../../components/CustomButton/CustomButton";
import MenuSlider from "../../components/MenuSlider/MenuSlider";
import HelpIcon from '@mui/icons-material/Help';
import HTMLTooltip from '../../components/HTMLTooltip/HTMLTooltip';
import FoodOptionsContainer from "../../components/FoodOptionContainer/FoodOptionsContainer";
import { FoodOption } from "../../util/Types/ApiTypes";
import SettingsContainer from '../../components/SettingsContainer/SettingsContainer';

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
      <div style={{display: 'flex', height:'100vh'}}>
        <div style={{width:'25%', height:'100vh'}}>
          <SettingsContainer menu={0} />
        </div>
        
        {/* <CustomButton onClick={() => console.log("test")}>Test</CustomButton> */}
        {/* <div style={{ width: "60%" }}>
          <MenuSlider min={0} max={10} value={xSpacing} onChange={(value) => setXSpacing(value)} menuText="X spacing" />
          <MenuSlider min={0} max={10} value={ySpacing} onChange={(value) => setYSpacing(value)} menuText="Y spacing" />
          <MenuSlider min={0} max={100} value={width} onChange={(value) => setWidth(value)} menuText="Width" />
          <MenuSlider min={0} max={100} value={height} onChange={(value) => setHeight(value)} menuText="Height" />
        </div> */}
        <div style={{ display: 'flex', width: "50%",  justifyContent:'center'}}>
          <FoodOptionsContainer width={width} height={height} xSpacing={xSpacing} ySpacing={ySpacing} onClick={() => {
          }} foodOptions={testFoodOptions} />
          <HTMLTooltip button={<HelpIcon />} htmlFrag={
            <div>
              <h1>Testing the hover functionality</h1>
              Switching over from custom hover to MUI tooltips wrapper for a cleaner look with less styling
            </div>} />
        </div>
      </div>

    </>
  )
}

export default ExamplePage;