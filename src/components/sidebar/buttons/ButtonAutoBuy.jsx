import React from 'react';
import ControlButton from "./ControlButton";

const ButtonAutoBuy = () => {
    return (
            <ControlButton
                btn_name={'AUTO BUY'}
                color="success"
                variant="contained"
                func={() => {
                    console.log('AUTO BUY')
                }}
            />
    );
};

export default ButtonAutoBuy;