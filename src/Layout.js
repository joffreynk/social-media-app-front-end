import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderBar from './NavBars/HeaderBar'
import LeftBar from './NavBars/LeftBar'
import RightBar from './NavBars/RightBar'

const Layout = () => {
  return (
    <>
        <HeaderBar />
        <div style={{display:"flex"}}>

            <LeftBar />

            <Outlet  />
            <RightBar />
        </div>
    </>
  )
}

export default Layout