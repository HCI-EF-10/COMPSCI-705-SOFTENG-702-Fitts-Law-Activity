// import React from 'react';
// import {Grid} from "@mui/material";
// import MenuItem from "../MenuItem/MenuItem";
// import {Menu} from "../../util/Types/ApiTypes";

// interface Props {
//     menus: Menu[];
//     onClick: () => void;
// }

// function MenuContainer({menus, onClick}: Props) {

//     return (
//         <Grid container sx={{height: "500px", width: "500px"}} columns={1}>
//             {menus.map((menu, index) => (
//                 <MenuItem
//                     key={index}
//                     imgSrc={menu.imgSrc}
//                     title={menu.title}
//                     selected={menu.selected}
//                     onClick={onClick}
//                     height={menu.height}
//                     width={menu.width}
//                     x={menu.x}
//                     y={menu.y}
//                 />
//             ))}
//         </Grid>
//     );
// }

// export default MenuContainer;

// Make sure you keep the stuff you want, i think you would move it into menuitem now?

import {
  Grid,
  Button,
  Box,
  styled,
  ButtonProps,
  Typography,
} from "@mui/material";

type Props = {
  rowSpacing: number;
  buttonWidth: number;
  buttonHeight: number;
  handleClick: (index: number) => void;
};

const MenuButton = styled((props: ButtonProps) => (
  <Button variant="outlined" {...props} />
))({});

function MenuContainer({
  rowSpacing,
  buttonWidth,
  buttonHeight,
  handleClick,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        backgroundColor: "#fec795",
        flexDirection: "column",
        paddingTop: "2rem",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Menus</Typography>
      <Grid
        flex={1}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={`${rowSpacing * 0.12}vh`}
      >
        {[...Array(4)]
          .map((_, index) => index + 1)
          .map((index) => (
            <Grid item key={`menu-button-${index}`}>
              <MenuButton
                id={`${index}`}
                onClick={() => handleClick(index)}
                sx={{
                  width: `calc(${buttonWidth * 0.15}vw + 5rem)`,
                  height: `${buttonHeight * 0.12}vh`,
                }}
              >
                MENU {index}
              </MenuButton>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default MenuContainer;
