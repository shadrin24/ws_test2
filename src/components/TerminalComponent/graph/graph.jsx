import React from 'react';
import {Box} from "@mui/material";



const Graph = ({margin_top}) => {
    return (
        <Box height={"calc(100% - "+margin_top+")"} sx={{position: "fixed", left: 0, width: "calc(100% - 202px)", mt: 0}} alignContent='center' display="flex" flexDirection={"column"}>

        </Box>
    );
};

export default Graph;