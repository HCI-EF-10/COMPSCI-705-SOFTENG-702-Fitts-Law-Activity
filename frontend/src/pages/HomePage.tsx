import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("test");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" sx={{ marginTop: "20rem" }}>
        Fitts' Law in Life
      </Typography>
      <Button
        variant="contained"
        sx={{
          marginTop: "5rem",
          fontSize: "1rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          borderRadius: "10rem",
        }}
        onClick={handleNavigate}
      >
        Start
      </Button>
    </Box>
  );
}

export default HomePage;
