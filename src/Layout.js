import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderBar from './NavBars/HeaderBar'
import LeftBar from './NavBars/LeftBar'
import RightBar from './NavBars/RightBar'

const Layout = () => {
  return (
    <div className='theme-dark' style={{display:"flex", flexDirection:"column", gap:"0.5rem"}} >
        <HeaderBar />
        <div style={{display:"flex"}}>

            <LeftBar />

            <Outlet  />
            <RightBar />
        </div>
    </div>
  )
}

export default Layout