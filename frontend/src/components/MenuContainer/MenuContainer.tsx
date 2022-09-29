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
