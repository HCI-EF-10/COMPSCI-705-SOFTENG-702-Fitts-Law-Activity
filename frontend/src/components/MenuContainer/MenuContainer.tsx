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
        <Grid item key={`menu-button-${1}`}>
          <MenuButton
            id={`${1}`}
            onClick={() => handleClick(1)}
            sx={{
              width: `calc(${buttonWidth * 0.15}vw + 5rem)`,
              height: `${buttonHeight * 0.12}vh`,
            }}
          >
            Burgers
          </MenuButton>
        </Grid>
        <Grid item key={`menu-button-${2}`}>
          <MenuButton
            id={`${2}`}
            onClick={() => handleClick(2)}
            sx={{
              width: `calc(${buttonWidth * 0.15}vw + 5rem)`,
              height: `${buttonHeight * 0.12}vh`,
            }}
          >
            Sides
          </MenuButton>
        </Grid>
        <Grid item key={`menu-button-${3}`}>
          <MenuButton
            id={`${3}`}
            onClick={() => handleClick(3)}
            sx={{
              width: `calc(${buttonWidth * 0.15}vw + 5rem)`,
              height: `${buttonHeight * 0.12}vh`,
            }}
          >
            Dessert
          </MenuButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MenuContainer;
