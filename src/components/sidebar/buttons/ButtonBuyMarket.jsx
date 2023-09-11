import React from 'react';
import ControlButton from "./ControlButton";

const ButtonBuyMarket = () => {
    return (
        <ControlButton
            btn_name={'BUY MARKET'}
            color="success"
            variant="outlined"
            func={() => {
                console.log('BUY MARKET')
            }}
        />
    );
};

export default ButtonBuyMarket;