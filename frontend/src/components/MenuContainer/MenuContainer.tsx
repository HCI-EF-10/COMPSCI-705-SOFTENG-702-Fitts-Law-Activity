import React from 'react';
import {Grid} from "@mui/material";
import MenuItem from "../MenuItem/MenuItem";
import {Menu} from "../../util/Types/ApiTypes";

interface Props {
    menus: Menu[];
    onClick: () => void;
}

function MenuContainer({menus, onClick}: Props) {

    return (
        <Grid container sx={{height: "500px", width: "500px"}} columns={1}>
            {menus.map((menu, index) => (
                <MenuItem
                    key={index}
                    imgSrc={menu.imgSrc}
                    title={menu.title}
                    selected={menu.selected}
                    onClick={onClick}
                    height={menu.height}
                    width={menu.width}
                    x={menu.x}
                    y={menu.y}
                />
            ))}
        </Grid>
    );
}

export default MenuContainer;