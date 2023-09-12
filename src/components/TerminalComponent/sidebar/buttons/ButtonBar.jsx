import React from 'react';
import {Box, Grid} from "@mui/material";
import ControlButton from "./ControlButton";

let auto_buy = () => {
    console.log('AUTO BUY')
}
let auto_sell = () => {
    console.log('AUTO SELL')
}
let buy_market = () => {
    console.log('BUY MARKET')
}
let sell_market = () => {
    console.log('SELL MARKET')
}
let buy_trigger = () => {
    console.log('BUY TRIGGER')
}
let sell_trigger = () => {
    console.log('SELL TRIGGER')
}
let cancel_all = () => {
    console.log('CANCEL ALL')
}
let trade_out = () => {
    console.log('TRADE OUT')
}
let trade_out_all = () => {
    console.log('TRADE OUT ALL')
}

const ButtonBar = () => {
    return (
        <div>
            <Grid container justifyContent="center" alignItems="flex-start" sx={{mt: 4, height: "30vh"}}>
                <Grid item>
                    <ControlButton
                        btn_name={'AUTO BUY'}
                        color="success"
                        variant="contained"
                        func={auto_buy}
                    />
                </Grid>
                <Grid item>
                    <ControlButton
                        btn_name={'AUTO SELL'}
                        color="success"
                        variant="contained"
                        func={auto_sell}
                    />
                </Grid>
                <Grid item>
                    <ControlButton
                        btn_name={'BUY MARKET'}
                        color="success"
                        variant="outlined"
                        func={buy_market}
                    />
                </Grid>
                <Grid item>
                    <ControlButton
                        btn_name={'SELL MARKET'}
                        color="success"
                        variant="outlined"
                        func={sell_market}
                    />
                </Grid>
                <Grid item>
                    <ControlButton
                        btn_name={'BUY TRIGGER'}
                        color="success"
                        variant="contained"
                        func={buy_trigger}
                    />
                </Grid>
                <Grid item>
                    <ControlButton
                        btn_name={'SELL TRIGGER'}
                        color="success"
                        variant="contained"
                        func={sell_trigger}
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" sx={{mt: 4, height: 300}}>
                <Grid item>
                    <Box>
                        Some data
                    </Box>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="flex-end" sx={{mt: 4,}}>
                <Grid item>
                    <ControlButton
                        btn_name={'CANCEL ALL'}
                        color="success"
                        variant="contained"
                        func={cancel_all}
                    />
                </Grid>
                <Grid item>
                    <ControlButton
                        btn_name={'TRADE OUT'}
                        color="success"
                        variant="contained"
                        func={trade_out}
                    />
                </Grid>
                <Grid item>
                    <ControlButton
                        btn_name={'TRADE OUT ALL'}
                        color="success"
                        variant="contained"
                        func={trade_out_all}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default ButtonBar;