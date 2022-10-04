import { Box, Button, Typography } from "@mui/material";

interface Props {
  imgSrc: string;
  title: string;
  selected: boolean;
  height: number;
  width: number;
  onClick: () => void;
  marginRight?: string;
}

function FoodOptionsItem({
  imgSrc,
  title,
  selected,
  height,
  width,
  onClick,
  marginRight,
}: Props) {

  const widthUnit = 0.195;
  const heightUnit = 0.185;

  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight,
      }}
    >
      <Button
        style={{
          width: `${width * widthUnit}vw`,
          height: `calc(${height * heightUnit}vh + 2rem)`,
          border: `2px solid ${selected ? "#FFE600" : "#00109B"}`,
          boxShadow: "0 0 10px 0",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
        onClick={onClick}
      >
        <img
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          src={imgSrc}
        />
      </Button>

      <Typography variant="h6" marginY="1rem">
        {title}
      </Typography>
    </Box>
  );
}

export default FoodOptionsItem;
