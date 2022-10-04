import {
  Grid,
  Button,
  Box,
  styled,
  ButtonProps,
  Typography,
} from "@mui/material";
import { Menu } from "../../util/Types/ApiTypes";
import MenuItem from "../MenuItem/MenuItem";

type Props = {
  menus: Menu[];
  rowSpacing: number;
  handleClick: (index: number) => void;
};

const MenuButton = styled((props: ButtonProps) => (
  <Button variant="outlined" {...props} />
))({});

function MenuContainer({
  menus,
  rowSpacing,
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
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={`${rowSpacing * 0.12}vh`}
      >
        {menus.map((menu, index) => (
          <Grid item key={`menu-button-${index+1}`}>
             <div
            style={{ padding: "20px" }}>
                <MenuButton
                id={`${index + 1}`}
                onClick={() => handleClick(index + 1)}
                sx={{
                    width: `calc(${menu.width * 0.15}vw + 5rem)`,
                    height: `${menu.height * 0.12}vh`,
                }}
            >
                {menu.title + " " + (index + 1)}
            </MenuButton>
            </div>
                </Grid>
            ))}
      </Grid>
    </Box>
  );
}

export default MenuContainer;


// {[...Array(4)]
//   .map((_, index) => index + 1)
//   .map((index) => (
//     <Grid item key={`menu-button-${index}`}>
      
//       <MenuButton
//         id={`${index}`}
//         onClick={() => handleClick(index)}
//         sx={{
//           width: `calc(${buttonWidth * 0.15}vw + 5rem)`,
//           height: `${buttonHeight * 0.12}vh`,
//         }}
//       >
//         MENU {index}
//       </MenuButton>
//     </Grid>
//   ))}