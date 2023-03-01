import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderBar from './NavBars/HeaderBar'
import LeftBar from './NavBars/LeftBar'
import RightBar from './NavBars/RightBar'

const Layout = () => {
  return (
    <div>
        <HeaderBar />
        <div style={{display:"flex", paddingTop: "0.5rem"}}>

            <LeftBar />
            <Outlet />
            <RightBar />
        </div>
    </div>
  )
}

export default Layout