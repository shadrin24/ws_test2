import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import styled from "@emotion/styled";

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
let cancel_all = () => {
    console.log('CANCEL ALL')
}
let trade_out = () => {
    console.log('TRADE OUT')
}
let trade_out_all = () => {
    console.log('TRADE OUT ALL')
}

const TypographyButton = styled(Typography)({
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center"
})

const SidebarComponent = ({margin_top}) => {
    return (
        <Box height={"calc(100% - "+margin_top+")"} sx={{position: "fixed", right: 0, width: 200, mt: 0, borderLeft: "1px solid lightgray"}} alignContent='center' display="flex" flexDirection={"column"}>
            <Box flex={1} display={"flex"} justifyContent={"center"} alignItems={"start"} mt={1}>
                <Grid container justifyContent="center" alignContent="flex-start" sx={{height: "100%"}}>
                    <Grid item>
                        <Button
                            variant="contained"
                            onClick={auto_buy}
                            sx={{
                                width: "5rem",
                                height: "5rem",
                                margin: 0.4,
                                backgroundColor: "green",
                                color: "black",
                                '&:hover': {
                                    backgroundColor: "darkgreen "
                                }
                            }}
                        >
                            <TypographyButton>
                                AUTO BUY
                            </TypographyButton>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            onClick={auto_sell}
                            sx={{
                                width: "5rem",
                                height: "5rem",
                                margin: 0.4,
                                backgroundColor: "white",
                                color: "black",
                                '&:hover': {
                                    backgroundColor: "lightgray "
                                }
                            }}
                        >
                            <TypographyButton>
                                AUTO SELL
                            </TypographyButton>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            onClick={buy_market}
                            sx={{
                                width: "5rem",
                                height: "5rem",
                                margin: 0.4,
                                backgroundColor: "black",
                                color: "green",
                                borderColor: "green",
                                '&:hover': {
                                    backgroundColor: "#040404",
                                    borderColor: "darkgreen"
                                }
                            }}
                        >
                            <TypographyButton>
                                BUY MARKET
                            </TypographyButton>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            onClick={sell_market}
                            sx={{
                                width: "5rem",
                                height: "5rem",
                                margin: 0.4,
                                backgroundColor: "black",
                                color: "red",
                                borderColor: "red",
                                '&:hover': {
                                    backgroundColor: "#040404",
                                    borderColor: "darkred",
                                }
                            }}
                        >
                            <TypographyButton>
                                SELL MARKET
                            </TypographyButton>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box flex={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Grid container justifyContent="center" alignItems="center" sx={{height: "100%"}}>
                    <Grid item>
                        <Typography color="gray">
                            Some data
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box flex={1} display={"flex"} justifyContent={"center"} alignItems={"end"} mb={1}>
                <Grid container justifyContent="center" alignContent="flex-end" sx={{mt: 1, height: "100%"}}>
                    <Grid item alignItems="flex-start">
                        <Button
                            variant="outlined"
                            onClick={cancel_all}
                            sx={{
                                width: "5rem",
                                height: "5rem",
                                margin: 0.4,
                                backgroundColor: "black",
                                color: "white",
                                borderColor: "white",
                                '&:hover': {
                                    backgroundColor: "#040404",
                                    borderColor: "lightgray",
                                }
                            }}
                        >
                            <TypographyButton>
                                CANCEL ALL
                            </TypographyButton>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            onClick={trade_out}
                            sx={{
                                width: "5rem",
                                height: "5rem",
                                margin: 0.4,
                                backgroundColor: "black",
                                color: "red",
                                borderColor: "white",
                                '&:hover': {
                                    backgroundColor: "#040404",
                                    borderColor: "lightgray",
                                }
                            }}
                        >
                            <TypographyButton>
                                TRADE OUT
                            </TypographyButton>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            onClick={trade_out_all}
                            sx={{
                                width: "5rem",
                                height: "5rem",
                                margin: 0.4,
                                backgroundColor: "black",
                                color: "red",
                                borderColor: "white",
                                '&:hover': {
                                    backgroundColor: "#040404",
                                    borderColor: "lightgray",
                                }
                            }}
                        >
                            <TypographyButton>
                                TRADE OUT ALL
                            </TypographyButton>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default SidebarComponent;