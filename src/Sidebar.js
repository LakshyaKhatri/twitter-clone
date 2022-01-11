import React from 'react';
import SidebarOption from './SidebarOption';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookamrkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <TwitterIcon />

      {/* SidebarOption */}
      <SidebarOption  Icon={HomeIcon} text="Home"/>
      <SidebarOption  Icon={SearchIcon} text="Explore"/>
      <SidebarOption  Icon={NotificationsNoneIcon} text="Notifications"/>
      <SidebarOption  Icon={MailOutlineIcon} text="Messages"/>
      <SidebarOption  Icon={BookamrkBorderIcon} text="Bookmarks"/>
      <SidebarOption  Icon={ListAltIcon} text="Lists"/>
      <SidebarOption  Icon={PermIdentityIcon} text="Profile"/>
      <SidebarOption  Icon={MoreHorizIcon} text="More"/>

      {/* Button -> Tweet */}
    </div>
  );
}

export default Sidebar;
