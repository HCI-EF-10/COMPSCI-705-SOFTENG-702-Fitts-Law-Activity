import React from "react";
import { Grid, Button, Box, Typography, IconButton } from "@mui/material";
import MenuSlider from "../../components/MenuSlider/MenuSlider";
import { useNavigate } from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";
interface Props {
  menu: number;
}

function SettingsContainer({ menu }: Props) {
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [xPos, setXPos] = React.useState(0);
  const [yPos, setYPos] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [clicks, setClicks] = React.useState(0);
  const [errors, setErrors] = React.useState(0);
  const [isEditMode, setIsEditMode] = React.useState(true);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const setEditMode = () => {
    setIsEditMode(true);
  };

  const setViewMode = () => {
    setIsEditMode(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1.5,
        backgroundColor: "#d4edfc",
        paddingTop: "2rem",
        paddingX: "1rem",
      }}
    >
      <Box display="flex" flexDirection="row">
        <Typography variant="h2">Settings</Typography>
        <IconButton>
          <HelpIcon fontSize="large" />
        </IconButton>
      </Box>
      <Typography variant="subtitle1" marginTop="0.25rem">
        Selected component: Menu {menu} item
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          marginTop: "4rem",
        }}
      >
        <Typography variant="h3" marginBottom="1rem">
          Component Properties
        </Typography>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <MenuSlider
            min={0}
            max={100}
            value={width}
            onChange={(width) => setWidth(width)}
            menuText="Width"
          />
          <MenuSlider
            min={0}
            max={100}
            value={height}
            onChange={(height) => setHeight(height)}
            menuText="Height"
          />
          <MenuSlider
            min={0}
            max={100}
            value={xPos}
            onChange={(xPos) => setXPos(xPos)}
            menuText="X Position"
          />
          <MenuSlider
            min={0}
            max={100}
            value={yPos}
            onChange={(yPos) => setYPos(yPos)}
            menuText="Y Position"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginY="4rem"
      >
        <Typography variant="h3" display="flex">
          Fitts’ Law Score: {score}
        </Typography>
        <Typography variant="h3">Number of clicks: {clicks}</Typography>
        <Typography variant="h3">Errors: {errors}</Typography>
      </Box>
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        padding="15px"
      >
        {isEditMode ? (
          <Button variant="contained" onClick={setViewMode}>
            EDIT MODE
          </Button>
        ) : (
          <Button variant="contained" onClick={setEditMode}>
            VIEW MODE
          </Button>
        )}
        <Button variant="contained" onClick={handleNavigate}>
          RUN TEST
        </Button>
      </Grid>
    </Box>
  );
}

export default SettingsContainer;
