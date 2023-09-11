import React from 'react';
import ControlButton from "./ControlButton";

const ButtonTradeOut = () => {
    return (
        <ControlButton
            btn_name={'TRADE OUT'}
            color="success"
            variant="contained"
            func={() => {
                console.log('TRADE OUT')
            }}
        />
    );
};

export default ButtonTradeOut;