import React from 'react';
import {Button} from "@mui/material";

const ControlButton = ({btn_name, color, variant}) => {
    return (
        <Button
            sx={{
                width: "4rem",
                height: "4rem",
                padding: 1,
                margin: 0.5,
                fontSize: 11,
            }}
            variant={variant}
            onClick={() => {

            }}
            color={color}
        >

            {btn_name}</Button>
    );
};

export default ControlButton;