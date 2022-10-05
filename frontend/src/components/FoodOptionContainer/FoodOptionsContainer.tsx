import { Button, Box, Typography } from "@mui/material";
import FoodOptionsItem from "../FoodOptionsItem/FoodOptionsItem";
import { FoodOption } from "../../util/Types/ApiTypes";

interface Props {
  layout: number;
  width: number;
  height: number;
  xSpacing: number;
  ySpacing: number;
  foodOptions: FoodOption[];
  onClick: () => void;
}

function FoodOptionsContainer({
  layout,
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

  if (layout === 1) {
    return (
      <Box
        flex={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingTop="2rem"
      >
        <Typography variant="h2">Food Options</Typography>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginY={"auto"}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            marginBottom={marginBottom}
          >
            <FoodOptionsItem
              imgSrc={foodOptions[0].imgSrc}
              title={foodOptions[0].title}
              selected={foodOptions[0].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[1].imgSrc}
              title={foodOptions[1].title}
              selected={foodOptions[1].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
            />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <FoodOptionsItem
              imgSrc={foodOptions[2].imgSrc}
              title={foodOptions[2].title}
              selected={foodOptions[2].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[3].imgSrc}
              title={foodOptions[3].title}
              selected={foodOptions[3].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
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
    );
  }
  else if (layout === 2) {
    return (

      <Box
        flex={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingTop="2rem"
      >
        <Typography variant="h2">Food Options</Typography>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginY={"auto"}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            marginBottom={marginBottom}
          >
            <FoodOptionsItem
              imgSrc={foodOptions[0].imgSrc}
              title={foodOptions[0].title}
              selected={foodOptions[0].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[1].imgSrc}
              title={foodOptions[1].title}
              selected={foodOptions[1].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
            />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <FoodOptionsItem
              imgSrc={foodOptions[2].imgSrc}
              title={foodOptions[2].title}
              selected={foodOptions[2].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[3].imgSrc}
              title={foodOptions[3].title}
              selected={foodOptions[3].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
            />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center"
          marginTop={marginBottom}>
            <FoodOptionsItem
              imgSrc={foodOptions[4].imgSrc}
              title={foodOptions[4].title}
              selected={foodOptions[4].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[5].imgSrc}
              title={foodOptions[5].title}
              selected={foodOptions[5].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
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
    );
  }
  else if (layout === 3) {
    return (
      <Box
        flex={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingTop="2rem"
      >
        <Typography variant="h2">Food Options</Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginY={"auto"}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginBottom={marginBottom}
          >
            <FoodOptionsItem
              imgSrc={foodOptions[0].imgSrc}
              title={foodOptions[0].title}
              selected={foodOptions[0].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[1].imgSrc}
              title={foodOptions[1].title}
              selected={foodOptions[1].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[2].imgSrc}
              title={foodOptions[2].title}
              selected={foodOptions[2].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
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
    );
  } else {
    return (

      <Box
        flex={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingTop="2rem"
      >
        <Typography variant="h2">Food Options</Typography>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginY={"auto"}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            marginBottom={marginBottom}
          >
            <FoodOptionsItem
              imgSrc={foodOptions[0].imgSrc}
              title={foodOptions[0].title}
              selected={foodOptions[0].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[1].imgSrc}
              title={foodOptions[1].title}
              selected={foodOptions[1].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
            />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <FoodOptionsItem
              imgSrc={foodOptions[2].imgSrc}
              title={foodOptions[2].title}
              selected={foodOptions[2].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[3].imgSrc}
              title={foodOptions[3].title}
              selected={foodOptions[3].selected}
              onClick={() => { }}
              width={buttonWidth}
              height={buttonHeight}
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
    );
  }
}

export default FoodOptionsContainer;
