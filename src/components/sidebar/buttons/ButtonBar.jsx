import React from 'react';
import {Box, Grid} from "@mui/material";
import ButtonAutoBuy from "./ButtonAutoBuy";
import ButtonAutoSell from "./ButtonAutoSell";
import ButtonBuyMarket from "./ButtonBuyMarket";
import ButtonSellMarket from "./ButtonSellMarket";
import ButtonBuyTrigger from "./ButtonBuyTrigger";
import ButtonSellTrigger from "./ButtonSellTrigger";
import ButtonCancelAll from "./ButtonCancelAll";
import ButtonTradeOut from "./ButtonTradeOut";
import ButtonTradeOutAll from "./ButtonTradeOutAll";

const ButtonBar = () => {
    return (
        <div>
            <Grid container justifyContent="center" alignItems="flex-start" sx={{mt: 4, height: "30vh"}}>
                <Grid item>
                    <ButtonAutoBuy/>
                </Grid>
                <Grid item>
                    <ButtonAutoSell/>
                </Grid>
                <Grid item>
                    <ButtonBuyMarket/>
                </Grid>
                <Grid item>
                    <ButtonSellMarket/>
                </Grid>
                <Grid item>
                    <ButtonBuyTrigger/>
                </Grid>
                <Grid item>
                    <ButtonSellTrigger/>
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
                    <ButtonCancelAll/>
                </Grid>
                <Grid item>
                    <ButtonTradeOut/>
                </Grid>
                <Grid item>
                    <ButtonTradeOutAll/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ButtonBar;