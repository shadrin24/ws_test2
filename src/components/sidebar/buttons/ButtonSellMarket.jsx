import React from 'react';
import ControlButton from "./ControlButton";

const ButtonSellMarket = () => {
    return (
        <ControlButton
            btn_name={'SELL MARKET'}
            color="success"
            variant="outlined"
            func={() => {
                console.log('SELL MARKET')
            }}
        />
    );
};

export default ButtonSellMarket;