import React from 'react';
import CustomButton from "../../components/CustomButton/CustomButton";
import MenuSlider from "../../components/MenuSlider/MenuSlider";
import { Button } from "@mui/material";

function ExamplePage() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <CustomButton onClick={() => console.log("test")}>Test</CustomButton>
      <div style={{width: "500px"}}>
        <MenuSlider min={0} max={100} value={value} onChange={(value) => setValue(value)} menuText="Test"/>
      </div>
    </>
  )
}

export default ExamplePage;