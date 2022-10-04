import { Button, Box, Typography, Grid } from "@mui/material";
import FoodOptionsItem from "../FoodOptionsItem/FoodOptionsItem";
import { FoodOption } from "../../util/Types/ApiTypes";

interface Props {
  width: number;
  height: number;
  xSpacing: number;
  ySpacing: number;
  foodOptions: FoodOption[];
  onClick: () => void;
}

function FoodOptionsContainer({
  width,
  height,
  xSpacing,
  ySpacing,
  foodOptions,
  onClick,
}: Props) {
  const widthUnit = 0.195;
  const heightUnit = 0.185;
  const buttonWidth = `${width * widthUnit}vw`;
  const buttonHeight = `calc(${height * heightUnit}vh + 2rem)`;
  const marginRight = `${xSpacing * widthUnit}vw`;
  const marginBottom = `${ySpacing * heightUnit}vh`;

  return (
    <Box
      flex={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="2rem"
    >
      <Typography variant="h2">Food Options</Typography>

      <Box
        flex={3}
        display="flex"
        flexDirection="row"
        alignItems="center"
        padding="2rem"
      >
        <Box
          flex={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="2rem"
        >
          <FoodOptionsItem
            imgSrc={foodOptions[0].imgSrc}
            title={foodOptions[0].title}
            selected={foodOptions[0].selected}
            onClick={() => { }}
            width={foodOptions[0].width}
            height={foodOptions[0].height}
            marginRight={marginRight}
          />
          <FoodOptionsItem
            imgSrc={foodOptions[2].imgSrc}
            title={foodOptions[2].title}
            selected={foodOptions[2].selected}
            onClick={() => { }}
            width={foodOptions[2].width}
            height={foodOptions[2].height}
            marginRight={marginRight}
          />
          </Box>
          <Box
            flex={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="2rem"
          >
            <FoodOptionsItem
            imgSrc={foodOptions[3].imgSrc}
            title={foodOptions[3].title}
            selected={foodOptions[3].selected}
            onClick={() => { }}
            width={foodOptions[3].width}
            height={foodOptions[3].height}
            marginRight={marginRight}
          />

          <FoodOptionsItem
            imgSrc={foodOptions[1].imgSrc}
            title={foodOptions[1].title}
            selected={foodOptions[1].selected}
            onClick={() => { }}
            width={foodOptions[1].width}
            height={foodOptions[1].height}
            marginRight={marginRight}
          />
        </Box>

      </Box>

      <Button
        variant="contained"
        sx={{
          fontSize: "1rem",
          paddingX: "2rem",
          borderRadius: "10rem",
          marginBottom: "1rem",
        }}
      >
        CHECKOUT
      </Button>
    </Box>
    // </Grid>
  );
}

export default FoodOptionsContainer;
