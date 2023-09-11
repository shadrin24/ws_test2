import React from 'react';
import ControlButton from "./ControlButton";

const ButtonSellTrigger = () => {
    return (
        <ControlButton
            btn_name={'SELL TRIGGER'}
            color="success"
            variant="contained"
            func={() => {
                console.log('SELL TRIGGER')
            }}
        />
    );
};

export default ButtonSellTrigger;