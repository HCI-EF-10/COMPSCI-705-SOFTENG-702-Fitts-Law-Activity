import React from 'react';
import CustomButton from "../../components/CustomButton/CustomButton";
import MenuSlider from "../../components/MenuSlider/MenuSlider";
import { Button } from "@mui/material";
import HoverIcon from '../../components/HoverIcon/HoverIcon';
import HelpIcon from '@mui/icons-material/Help';

function ExamplePage() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <CustomButton onClick={() => console.log("test")}>Test</CustomButton>
      <div style={{width: "500px"}}>
        <MenuSlider min={0} max={100} value={value} onChange={(value) => setValue(value)} menuText="Test"/>
        <HoverIcon icon={<HelpIcon />} onHover={<div>test</div>} />
      </div>
    </>
  )
}

export default ExamplePage;