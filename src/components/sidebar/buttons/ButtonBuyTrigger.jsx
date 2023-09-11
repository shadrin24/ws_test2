import React from 'react';
import ControlButton from "./ControlButton";

const ButtonBuyTrigger = () => {
    return (
        <ControlButton
            btn_name={'BUY TRIGGER'}
            color="success"
            variant="contained"
            func={() => {
                console.log('BUY TRIGGER')
            }}
        />
    );
};

export default ButtonBuyTrigger;