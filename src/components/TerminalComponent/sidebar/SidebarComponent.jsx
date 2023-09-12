import React from 'react';
import {Box, Drawer} from "@mui/material";
import ButtonBar from "./buttons/ButtonBar";

const SidebarComponent = () => {
    return (
        <Drawer
            variant="permanent"
            anchor="right"
        >
            <Box width='200px'>
                <ButtonBar></ButtonBar>
            </Box>
        </Drawer>
    );
};

export default SidebarComponent;