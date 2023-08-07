import React from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { Outlet } from 'react-router-dom'
import HeaderBar from './NavBars/HeaderBar'
import LeftBar from './NavBars/LeftBar'
import RightBar from './NavBars/RightBar'

const Layout = () => {
  const clientQuery = new QueryClient();
  return (
    <QueryClientProvider client={clientQuery} >
        <HeaderBar />
        <div style={{display:"flex"}}>

            <LeftBar />

            <Outlet  />
            <RightBar />
        </div>
    </QueryClientProvider>
  )
}

export default Layout