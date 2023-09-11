import React from 'react';
import ControlButton from "./ControlButton";

const ButtonTradeOutAll = () => {
    return (
        <ControlButton
            btn_name={'TRADE OUT ALL'}
            color="success"
            variant="contained"
            func={() => {
                console.log('TRADE OUT ALL')
            }}
        />
    );
};

export default ButtonTradeOutAll;