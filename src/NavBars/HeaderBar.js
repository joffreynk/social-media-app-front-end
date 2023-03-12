import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import passportImage from '../images/passport.png'

import './headerBar.css'
import { darkModeContext } from '../context/darkModeContext';

const HeaderBar = () => {
  const {darkMode, toggleDarkMode} = useContext(darkModeContext)
  return (
    <div className='header-bar'>
      <div className='left'>
        <Link to='/' className='logo'>JTalk</Link>
        {darkMode? <WbSunnyOutlinedIcon onClick={toggleDarkMode} /> : <DarkModeOutlinedIcon onClick={toggleDarkMode}  />}
        <GridViewOutlinedIcon />
        <div className='search'>
          <input type="text" placeholder='Search' />
          <SearchOutlinedIcon className='search-btn' />
        </div>
      </div>
      <div className='right'>
        <Person4OutlinedIcon />
        <MailOutlineOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className='prof-icon'>
          <img src={passportImage} alt='passport ' />
          <span>JOffreynk</span>
        </div>
      </div>
    </div>
  )
}

export default HeaderBar