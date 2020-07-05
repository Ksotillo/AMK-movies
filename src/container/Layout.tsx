// React
import React, { useState } from "react";
//Third parties
import { useSwipeable, Swipeable } from 'react-swipeable'
// Components
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
    const [ sidebarOpened, setSidebarOpened ] =useState(false);
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setSidebarOpened(false),
        onSwipedRight: () => setSidebarOpened(true),
    })

    const toggle = () => setSidebarOpened(!sidebarOpened);

    return (
    <div className="app default-layout">
        <Sidebar opened={sidebarOpened}/>
        <div className="wrapper">
            <Header toggleSidebar={toggle}/>
                <div className="body">
                    {/* <Content/> */}
                </div>
        </div>
        <div className={`sidebar-backdrop ${sidebarOpened ? 'show' : ''}`} onClick={() => setSidebarOpened(false)} {...swipeHandlers}></div>
    </div>
    )
}

export default Layout;