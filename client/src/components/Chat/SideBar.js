import React from 'react'
import './SideBar.css'
import SideBarChatRoom from './SideBarChatRoom'

const SideBar = () => {
    return (
        <div className = "sidebar">
            <div className = 'sidebar__top'>
                <h3>Nischal Paudyal</h3>
            </div>
            <div className ="sidebar__chatrooms">
                
                <div className ="sidebar__header">
                    <h4>Chatrooms</h4>
                </div>

            </div>
            <div className="sidebar__chatroomlist">
                <SideBarChatRoom />
                <SideBarChatRoom />
                <SideBarChatRoom />
            </div>
            </div>
       
    )
}

export default SideBar
