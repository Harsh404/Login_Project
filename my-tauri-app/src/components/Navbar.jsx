import React from 'react'
import '../components/styles/Navbar.css'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src='./images/logo.svg'></img>
        </div>
        <div className='toolbar'>
            <div className='searchbar'>
                <div class="search-box">
                    <input type="text" placeholder="Search for something" id="searchInput"/>
                </div>
            </div>
            <div className="iconbar">
                <div className='msg-icon'>
                    <a id='msg-btn'>
                        <QuestionAnswerIcon sx={{
                            color:'#718EBF',
                            fontSize:20,
                            marginTop:1.5
                        }}/>
                    </a>       
                </div>
                <div className='noti-icon'>
                    <a id='noti-btn'>
                        <NotificationsIcon sx={{
                            color:'#718EBF',
                            fontSize:20,
                            marginTop:1.5,
                            marginLeft:1.4,
                        }}/>
                    </a>       
                </div>

                <div className='setting-icon'>
                    <a id='setting-btn'>
                        <SettingsIcon sx={{
                            color:'#718EBF',
                            fontSize:20,
                            marginTop:1.3,
                            marginLeft:1.3
                        }}/>
                    </a>       
                </div>

                <div className='profile-img'>
                    <img id='dp' src='./images/dp.png'/>
                </div>
            </div>
        </div>
    

      
    </div>
  )
}
