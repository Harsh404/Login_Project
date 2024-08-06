import React from 'react'
import './styles/SideMenu.css'
import MenuIcon from '@mui/icons-material/Menu';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import LogoutIcon from '@mui/icons-material/Logout';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

export default function SideMenu() {
  return (
    <div>
        <div className='sidebar'>
          <a>
            <div className='drawer-btn'>
              <MenuIcon sx={{color:'white', fontSize: '40px', marginLeft: '27px', marginTop: '15px'}}/>

            </div>
          </a>
            <div className='dashboard-btn'>
              <a>
              <GridViewOutlinedIcon sx={{
                color: 'white',
                fontSize:'40px',
                marginLeft:'27px',
                marginTop:'50px'
              }}/>
              </a>
              <p id='dash-btn'>Dashboard</p>
            </div>
            <div className='myJob-btn'>
              <a>
              <WorkOutlinedIcon sx={{
                color:'white',
                fontSize:'35px',
                marginLeft:'27px',
                marginTop:'40px'
              }}/>
              </a>
              <p id='myjob-btn'>My Job</p>
            </div>
            <div className='message-btn'>
              <a>
                <ForumIcon sx={{
                  color:'white',
                  fontSize:'35px',
                  marginLeft:'27px',
                  marginTop:'45px'
                }}/>
              </a>
              <p id='msg-btn'>Messages</p>

            </div>
            <div className='upcoming-event-btn'>
              <a>
                <EventAvailableIcon sx={{
                  color:'white',
                  fontSize:'35px',
                  marginLeft:'27px',
                  marginTop:'45px'
                }}/>
              </a>
              <p id='events-btn'>Upcoming<br/>Events</p>
            </div>
            <div className='logout'>
              <a>
                <LogoutIcon sx={{
                  color:'white',
                  fontSize:'35px',
                  marginLeft:'27px',
                  marginTop:'40px'
                }}/>
              </a>
              <p id='logout-btn'>Log Out</p>
            </div>


        </div>
      
    </div>
  )
}
