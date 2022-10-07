import { Button, Box, Typography } from "@mui/material";
import FoodOptionsItem from "../FoodOptionsItem/FoodOptionsItem";
import { FoodOption } from "../../util/Types/ApiTypes";

interface Props {
  layout: number;
  width: number;
  height: number;
  xSpacing: number;
  ySpacing: number;
  foodOptions: FoodOption[][];
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
  const layoutIndex = layout - 1;
  const widthUnit = layout === 1 ? 0.19 : layout === 2 ? 0.115 : 0.38;
  const heightUnit = layout === 1 ? 0.183 : layout === 2 ? 0.183 : 0.08;
  const buttonWidth = `${width * widthUnit}vw`;
  const buttonHeight = `calc(${height * heightUnit}vh + 2rem)`;
  const marginRight = `${
    xSpacing * widthUnit - (layout === 3 ? 50 * widthUnit : 0)
  }vw`;
  const marginBottom = `${ySpacing * heightUnit}vh`;

  return (
    <Box
      flex={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingTop="2rem"
    >
      <Typography variant="h2">Food Options</Typography>

      {layout === 1 ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginY="auto"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            marginBottom={marginBottom}
          >
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][0].imgSrc}
              title={foodOptions[layoutIndex][0].title}
              selected={foodOptions[layoutIndex][0].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][1].imgSrc}
              title={foodOptions[layoutIndex][1].title}
              selected={foodOptions[layoutIndex][1].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
            />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][2].imgSrc}
              title={foodOptions[layoutIndex][2].title}
              selected={foodOptions[layoutIndex][2].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][3].imgSrc}
              title={foodOptions[layoutIndex][3].title}
              selected={foodOptions[layoutIndex][3].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
            />
          </Box>
        </Box>
      ) : layout === 2 ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginY="auto"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            marginBottom={marginBottom}
          >
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][0].imgSrc}
              title={foodOptions[layoutIndex][0].title}
              selected={foodOptions[layoutIndex][0].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][1].imgSrc}
              title={foodOptions[layoutIndex][1].title}
              selected={foodOptions[layoutIndex][1].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][2].imgSrc}
              title={foodOptions[layoutIndex][2].title}
              selected={foodOptions[layoutIndex][2].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
            />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][3].imgSrc}
              title={foodOptions[layoutIndex][3].title}
              selected={foodOptions[layoutIndex][3].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][4].imgSrc}
              title={foodOptions[layoutIndex][4].title}
              selected={foodOptions[layoutIndex][4].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][5].imgSrc}
              title={foodOptions[layoutIndex][5].title}
              selected={foodOptions[layoutIndex][5].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
            />
          </Box>
        </Box>
      ) : layout === 3 ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginY="auto"
          position="relative"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginLeft={marginRight}
          >
            <Box marginBottom={marginBottom}>
              <FoodOptionsItem
                imgSrc={foodOptions[layoutIndex][0].imgSrc}
                title={foodOptions[layoutIndex][0].title}
                selected={foodOptions[layoutIndex][0].selected}
                onClick={() => {}}
                width={buttonWidth}
                height={buttonHeight}
              />
            </Box>
            <Box>
              <FoodOptionsItem
                imgSrc={foodOptions[layoutIndex][1].imgSrc}
                title={foodOptions[layoutIndex][1].title}
                selected={foodOptions[layoutIndex][1].selected}
                onClick={() => {}}
                width={buttonWidth}
                height={buttonHeight}
              />
            </Box>
            <Box marginTop={marginBottom}>
              <FoodOptionsItem
                imgSrc={foodOptions[layoutIndex][2].imgSrc}
                title={foodOptions[layoutIndex][2].title}
                selected={foodOptions[layoutIndex][2].selected}
                onClick={() => {}}
                width={buttonWidth}
                height={buttonHeight}
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginY="auto"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            marginBottom={marginBottom}
          >
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][0].imgSrc}
              title={foodOptions[layoutIndex][0].title}
              selected={foodOptions[layoutIndex][0].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][1].imgSrc}
              title={foodOptions[layoutIndex][1].title}
              selected={foodOptions[layoutIndex][1].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
            />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][2].imgSrc}
              title={foodOptions[layoutIndex][2].title}
              selected={foodOptions[layoutIndex][2].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
              marginRight={marginRight}
            />
            <FoodOptionsItem
              imgSrc={foodOptions[layoutIndex][3].imgSrc}
              title={foodOptions[layoutIndex][3].title}
              selected={foodOptions[layoutIndex][3].selected}
              onClick={() => {}}
              width={buttonWidth}
              height={buttonHeight}
            />
          </Box>
        </Box>
      )}

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

export default FoodOptionsContainer;
