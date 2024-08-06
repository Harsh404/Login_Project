import React from 'react'
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import SideMenu from './components/SideMenu'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <>
    <PrimarySearchAppBar/>
    <div className='body-cont'>
      <div className='sidebar-cont'>
        <SideMenu/>
      </div>
      <div className='dashboard-cont'>
        <Dashboard/>
      </div>    
    </div>
    </>
  )
}