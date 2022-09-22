import React from 'react';
import CustomButton from "../../components/CustomButton/CustomButton";
import MenuSlider from "../../components/MenuSlider/MenuSlider";
import {Button} from "@mui/material";
import HoverIcon from '../../components/HoverIcon/HoverIcon';
import HelpIcon from '@mui/icons-material/Help';
import {Menu} from "../../util/Types/ApiTypes";
import MenuContainer from "../../components/MenuContainer/MenuContainer";

const testMenus: Menu[] = [
    {
        imgSrc: require("../../images/menu.jpg"),
        title: "Menu",
        selected: false,
        width: 200,
        height: 100,
        x: 0,
        y: 0,
    },
    {
        imgSrc: require("../../images/menu.jpg"),
        title: "Menu",
        selected: false,
        width: 200,
        height: 100,
        x: 0,
        y: 0,
    },
    {
        imgSrc: require("../../images/menu.jpg"),
        title: "Menu",
        selected: false,
        width: 200,
        height: 100,
        x: 0,
        y: 0,
    },
    {
        imgSrc: require("../../images/menu.jpg"),
        title: "Menu",
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
            <div style={{width: "500px"}}>
                <MenuSlider min={0} max={100} value={value} onChange={(value) => setValue(value)} menuText="Test"/>
                <HoverIcon icon={<HelpIcon/>} onHover={<div>test</div>}/>
            </div>
            <MenuContainer onClick={() => {
            }} menus={testMenus}/>
        </>
    )
}

export default ExamplePage;