import React from 'react';
import ControlButton from "./Control_button";
import {Box, Grid} from "@mui/material";

const ButtonBar = () => {
    return (
        <div>
            <Grid container justifyContent="center" sx={{mt: 4,}}>
                <Grid item>
                    <ControlButton btn_name={'AUTO BUY'} color="success" variant="contained"></ControlButton>
                </Grid>
                <Grid item>
                    <ControlButton btn_name={'AUTO SELL'} color="success" variant="contained"></ControlButton>
                </Grid>
                <Grid item>
                    <ControlButton btn_name={'BUY MARKET'} color="success" variant="outlined"></ControlButton>
                </Grid>
                <Grid item>
                    <ControlButton btn_name={'SELL MARKET'} color="success" variant="outlined"></ControlButton>
                </Grid>
                <Grid item>
                    <ControlButton btn_name={'BUY TRIGGER'} color="success" variant="contained"></ControlButton>
                </Grid>
                <Grid item>
                    <ControlButton btn_name={'SELL TRIGGER'} color="success" variant="contained"></ControlButton>
                </Grid>
                <Grid item>
                    <Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="flex-end" sx={{mt: 4, height: 500}}>
                <Grid item>
                    <ControlButton btn_name={'CANCEL ALL'} color="success" variant="contained"></ControlButton>
                </Grid>
                <Grid item>
                    <ControlButton btn_name={'TRADE OUT'} color="success" variant="contained"></ControlButton>
                </Grid>
                <Grid item>
                    <ControlButton btn_name={'TRADE OUT ALL'} color="success" variant="contained"></ControlButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default ButtonBar;