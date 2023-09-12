import React from 'react';
import {Button, Typography} from "@mui/material";

const ControlButton = ({btn_name, color, variant, func}) => {
    return (
        <Button
            sx={{
                width: "5rem",
                height: "5rem",
                padding: 1,
                margin: 0.5,
            }}
            variant={variant}
            onClick={func}
            color={color}
        >
            <Typography variant='h7' component='h7'>
                {btn_name}
            </Typography>
        </Button>
    );
};

export default ControlButton;