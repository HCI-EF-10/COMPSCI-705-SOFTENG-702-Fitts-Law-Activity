import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from "react";

function HomePage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("test");
  };
  const [prompt, setPrompt] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setPrompt(event.target.value);
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
      <FormControl sx={{ m: 5, minWidth: 120 }}>
        <InputLabel id="">Type of Prompt</InputLabel>
        <Select
          labelId="prompt-label"
          id="prompt-select"
          value={prompt}
          label="Type of Prompt"
          onChange={handleChange}
        >
          <MenuItem value={1}>Activity-based</MenuItem>
          <MenuItem value={2}>Theory-based</MenuItem>
        </Select>
        <FormHelperText>Select type of prompt</FormHelperText>
      </FormControl>
      <Button
        variant="contained"
        sx={{
          marginTop: "3rem",
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
