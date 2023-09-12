import React from 'react';
import {Box, Drawer} from "@mui/material";

const Menu = () => {
    return (
        <Drawer
            variant="permanent"
            anchor="top"
        >
            <Box width='100%' height="200px" textAlign="center">
                Menu
            </Box>
        </Drawer>
    );
};

export default Menu;