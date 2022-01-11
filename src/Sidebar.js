import React from 'react';
import SidebarOption from './SidebarOption';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <TwitterIcon />

      {/* SidebarOption */}
      <SidebarOption  Icon={HomeIcon} text="Home"/>
      <SidebarOption  Icon={SearchIcon} text="Explore"/>
      <SidebarOption  Icon={NotificationsNoneIcon} text="Notifications"/>

      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}


      {/* Button -> Tweet */}
    </div>
  );
}

export default Sidebar;
