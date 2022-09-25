import React from 'react';
import CustomButton from "../../components/CustomButton/CustomButton";
import MenuSlider from "../../components/MenuSlider/MenuSlider";
import HelpIcon from '@mui/icons-material/Help';
import HTMLTooltip from '../../components/HTMLTooltip/HTMLTooltip';

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
    </>
  )
}

export default ExamplePage;