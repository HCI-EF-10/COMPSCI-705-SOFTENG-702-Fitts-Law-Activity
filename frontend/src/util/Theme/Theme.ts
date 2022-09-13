import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: `"Inter", "sans-serif", "Arial"`,
        fontSize: 12,
        h1: {
            fontWeight: 700,
            fontSize: "3rem",
            marginBottom: "1.5rem",
        },
    },
});

export default theme;
