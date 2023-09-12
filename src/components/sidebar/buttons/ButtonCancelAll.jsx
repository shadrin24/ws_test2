import React from 'react';
import ControlButton from "./ControlButton";

const ButtonCancelAll = () => {
    return (
        <ControlButton
            btn_name={'CANCEL ALL'}
            color="success"
            variant="contained"
            func={() => {
                console.log('CANCEL ALL')
            }}
        />
    );
};

export default ButtonCancelAll;