import React from 'react'
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import SideMenu from './components/SideMenu'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <>
    <Navbar/>
    <div className='body-cont'>
      <div className='sidebar-cont'>
        <Sidebar/>
      </div>
      <div className='dashboard-cont'>
        <Dashboard/>
      </div>    
    </div>
    </>
  )
}