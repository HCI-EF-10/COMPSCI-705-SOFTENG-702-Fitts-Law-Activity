import { Box, Button, Typography } from "@mui/material";

interface Props {
  imgSrc: string;
  title: string;
  selected: boolean;
  height: string;
  width: string;
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
  return (
    <Box
      sx={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight,
        minWidth: "200px",
      }}
    >
      <Button
        style={{
          width,
          height,
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
