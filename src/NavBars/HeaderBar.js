import React from 'react'
import { Link } from 'react-router-dom';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';



const HeaderBar = () => {
  return (
    <div className='header-bar'>
      <div className='left'>
        <Link>J Talk</Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div>
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className='right'>
        <Person4OutlinedIcon />
        <MailOutlineOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div>
          {/* <img src='' alt='' /> */}
          <span>JOffreynk</span>
        </div>
      </div>
    </div>
  )
}

export default HeaderBar