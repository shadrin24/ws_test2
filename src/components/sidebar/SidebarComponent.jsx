import React from 'react';
import {Drawer} from "@mui/material";
import ButtonBar from "./ButtonBar";

const SidebarComponent = () => {
    return (
        <Drawer sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 150,},
                }}
                variant="permanent"
                anchor="right"
        >
            <ButtonBar></ButtonBar>
        </Drawer>
    );
};

export default SidebarComponent;