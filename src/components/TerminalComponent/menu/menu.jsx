import React from 'react';
import {Autocomplete, Box, Grid, InputAdornment, Stack, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";

const list_ticker = [{label: 'SBER'}, {label: 'MTLR'}, {label: 'New'}];
const accounts = [{label: 'account number'}]
const order_limit = [{label: 'day'}, {label: 'GTC'}]
let date = new Date()
let today = date.toLocaleDateString("Ru")

const TextFieldWhite = styled(TextField)({
    "& .MuiInputBase-root ": {color: 'lightgray'},
    "& .MuiInputBase-root:hover": {color: 'white'},
    "& .MuiInputBase-root.Mui-focused ": {color: 'white'},
    "& .MuiFormLabel-root": {color: "lightgray"},
    "& .MuiFormLabel-root.Mui-focused": {color: "white"},
    '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: 'lightgray'}, },
    "& .MuiOutlinedInput-root:hover": {"& fieldset": {borderColor: "white"}},
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {borderColor: "white"}
})

const Menu = (height) => {
    return (
        <Box height={height} borderBottom={"2px solid lightgray"}>
            <Stack direction="row" height={"100%"}>
                <Box flex={2} p={2}>
                    <Grid container direction="column" justifyContent="flex-end" alignContent="flex-start" sx={{ height: "100%"}} columnGap={1}>
                        <Grid item>
                            <Autocomplete
                                disablePortal
                                freeSolo
                                id="combo-box-demo"
                                options={list_ticker}
                                sx={{ width: 100}}
                                disableClearable="True"
                                renderInput={(params) =>
                                    <TextFieldWhite {...params} label="Ticker" size="small"/>}
                            />
                        </Grid>
                        <Grid item>
                            <Typography alignItems="center" color="lightgray" p={1}>
                                {today}
                            </Typography>
                        </Grid>
                        <Autocomplete
                            disablePortal
                            freeSolo
                            id="combo-box-demo"
                            options={accounts}
                            sx={{ width: 200 }}
                            disableClearable="True"
                            renderInput={(params) => <TextFieldWhite {...params} label="Account" size="small"/>}
                        />
                        <TextFieldWhite label="Lots" type="number" size="small"
                                   sx={{ width: 120}}
                                   InputProps={{
                                       endAdornment:
                                           <InputAdornment position="end" >
                                               <Typography color="lightgray" sx={{fontSize: "14px"}}>
                                                   lots
                                               </Typography>
                                           </InputAdornment>
                                   }}

                        />
                    </Grid>
                </Box>
                <Box flex={1} p={2} alignItems="end" justifyContent="right" display="flex">
                    <Autocomplete
                        disablePortal
                        freeSolo
                        id="combo-box-demo"
                        options={order_limit}
                        sx={{ width: 150, }}
                        disableClearable="True"
                        renderInput={(params) => <TextFieldWhite {...params} label="Order limit" size="small"/>}
                    />
                </Box>
            </Stack>
        </Box>
    );
};

export default Menu;