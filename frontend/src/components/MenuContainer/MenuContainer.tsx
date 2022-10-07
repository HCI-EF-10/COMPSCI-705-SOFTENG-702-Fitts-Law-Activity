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
  const widthUnit = 0.14;
  const heightUnit = 0.178;
  const width = `calc(${buttonWidth * widthUnit}vw + 5rem)`;
  const height = `${buttonHeight * heightUnit}vh`;
  const menus = ["Burgers", "Sides", "Desserts"];

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
        rowSpacing={`${rowSpacing * heightUnit}vh`}
      >
        {menus.map((menu, classIndex) => (
          <Grid item key={`menu-button-${classIndex}`}>
            <MenuButton
              id={`${classIndex}`}
              onClick={() => handleClick(classIndex)}
              sx={{ width, height }}
            >
              {menu}
            </MenuButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MenuContainer;
