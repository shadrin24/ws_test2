import React from 'react';
import ControlButton from "./ControlButton";

const ButtonAutoSell = () => {
    return (
        <ControlButton
            btn_name={'AUTO SELL'}
            color="success"
            variant="contained"
            func={() => {
                console.log('AUTO SELL')
            }}
        />
    );
};

export default ButtonAutoSell;