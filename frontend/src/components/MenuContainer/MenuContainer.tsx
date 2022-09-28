import React from "react";
import { Grid, Button, Box, styled, ButtonProps } from "@mui/material";

type Props = {
  rowSpacing: number;
  buttonWidth: number;
  buttonHeight: number;
  handleClick: (index: number) => void;
};

const MenuButton = styled((props: ButtonProps) => (
  <Button variant="outlined" {...props} />
))();

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
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Menus</h1>
      <Grid
        flex={1}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={`${rowSpacing * 0.01 * 4}rem`}
      >
        {[...Array(4)]
          .map((_, index) => index + 1)
          .map((index) => (
            <Grid item>
              <MenuButton
                id={`${index}`}
                onClick={() => handleClick(index)}
                sx={{
                  width: `calc(${buttonWidth * 0.01 * 10}rem + 5rem)`,
                  height: `calc(${buttonHeight * 0.01 * 10}rem)`,
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
