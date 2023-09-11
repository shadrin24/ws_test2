import React from 'react';
import {Button} from "@mui/material";

const ControlButton = ({btn_name, color, variant, func}) => {
    return (
        <Button
            sx={{
                width: "5rem",
                height: "5rem",
                padding: 1,
                margin: 0.5,
                fontSize: 14,
            }}
            variant={variant}
            onClick={func}
            color={color}
        >

            {btn_name}</Button>
    );
};

export default ControlButton;