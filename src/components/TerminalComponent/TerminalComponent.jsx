import React from 'react';
import SidebarComponent from "./sidebar/SidebarComponent";
import Menu from "./menu/menu";

const TerminalComponent = () => {
    return (
        <div>
            <Menu/>
            <SidebarComponent/>
        </div>
    );
};

export default TerminalComponent;