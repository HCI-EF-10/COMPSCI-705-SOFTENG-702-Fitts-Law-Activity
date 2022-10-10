import {Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

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
            <Typography variant="h1" sx={{marginTop: "5rem"}}>
                Fitts' Law in Life
            </Typography>
            <Typography sx={{marginTop: "1rem"}} marginLeft={"10rem"} marginRight={"10rem"}>
                Hello! Our app is designed for users to learn and practice Fitts’s Law in two different ways:
            </Typography>
            <Typography marginLeft={"9rem"} marginRight={"10rem"}>
                <br/>
                - By receiving theory-based prompts
                <br/>
                - By receiving context-based prompts
                <br/><br/>
            </Typography>
            <Typography marginLeft={"10rem"} marginRight={"10rem"}>
                In order to find out which method works better, you will be able to try out both methods using our app.
            </Typography>
            <Typography variant="h3" marginLeft={"10rem"} marginRight={"10rem"}>
                <br/>
                Here are the instructions:
            </Typography>
            <Typography marginLeft={"10rem"} marginRight={"10rem"}>
                <br/>
                1. Press the start button.
                <br/>
                2. Adjust the width, height, and spacing between the buttons appropriately using the sliders on the left.
                <br/>
                3. When you think the buttons look good, press the “START TEST” button to test how well you have designed
                the buttons.
                <br/>
                4. Follow the test instructions. Make sure you click the buttons in order.
                <br/>
                5. Please remember that you cannot adjust the button properties such as width and height after starting the
                test.
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
