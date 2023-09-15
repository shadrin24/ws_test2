import React from 'react';
import SidebarComponent from "./sidebar/SidebarComponent";
import Menu from "./menu/menu";
import Graph from "./graph/graph";
import {Box} from "@mui/material";

const menu_height = "155px"

const TerminalComponent = () => {
    return (
        <Box bgcolor="black" height={"100vh"}>
            <Menu height={menu_height}/>
            <SidebarComponent margin_top={menu_height}/>
            <Graph margin_top={menu_height}/>
        </Box>
    );
};

export default TerminalComponent;