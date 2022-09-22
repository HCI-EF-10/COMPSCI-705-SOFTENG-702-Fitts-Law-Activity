import React from 'react';
import {Grid, Typography} from "@mui/material";

interface Props {
    imgSrc: string;
    title: string;
    selected: boolean;
    width: number;
    height: number;
    x: number;
    y: number;
    onClick: () => void;
}

function MenuItem({imgSrc, title, selected, onClick, height, width, x, y}: Props) {

    return (
        <Grid item xs={6} sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: y > 0 ? `${Math.abs(y)}px` : "0px",
            paddingBottom: y < 0 ? `${Math.abs(y)}px` : "0px",
            paddingLeft: x > 0 ? `${Math.abs(x)}px` : "0px",
            paddingRight: x < 0 ? `${Math.abs(x)}px` : "0px",
        }}>
            <div
                style={{
                    border: `2px solid ${selected ? "#FFE600" : "#00109B"}`,
                    boxShadow: "0 0 10px 0",
                    borderRadius: "10px",
                    width: `${width}px`,
                    height: `${height}px`,
                    padding: "1%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onClick={onClick}>
                <img width={"50%"} src={imgSrc}/>
            </div>
            <Typography variant="h6" style={{textAlign: "center", marginTop: "10px"}}>{title}</Typography>
        </Grid>
    );
}

export default MenuItem;