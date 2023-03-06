import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderBar from './NavBars/HeaderBar'
import LeftBar from './NavBars/LeftBar'
import RightBar from './NavBars/RightBar'

const Layout = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"0.5rem" , backgroundColor:'#f1f1f1'}} >
        <HeaderBar />
        <div style={{display:"flex", backgroundColor:'#f1f1f1'}}>

            <LeftBar />

            <Outlet  />
            <RightBar />
        </div>
    </div>
  )
}

export default Layout