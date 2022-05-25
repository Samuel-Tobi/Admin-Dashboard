import React from 'react';
import './topbar.css';
import image from './passport001.jpg';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <Link to='/' className='link'>
            <span className='logo'>Admin</span>
          </Link>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img src={image} alt='' className='topAvatar' />
        </div>
      </div>
    </div>
  );
}
