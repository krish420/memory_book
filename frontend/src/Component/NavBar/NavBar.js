import React from 'react'
import Grid from '@mui/material/Grid';
import sitLogo from '../../images/sitlogo.jpg'
import './NavBar.css'
import home from '../../images/house.png'
import groups from '../../images/groups.png'
import friends from '../../images/group.png'
import messenger from '../../images/messengerkids.png'
// import notification from '../../images/bell.png'
import { Avatar } from '@mui/material';
// import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NavBar() {
        return (
                <div>
                        <Grid container className='navbar_main'>
                                <Grid item xs={3}>
                                        <div className='navbar_leftbar'>
                                                <img className='navbar_logo' src={sitLogo} alt='' width='40px' />
                                                <input className='navbar_search' type='text' placeholder='Search Friends' />
                                        </div>
                                </Grid>
                                <Grid item xs={6}>
                                        <div className='navbar_midbar'>
                                                <div className='navbar_tabs active'>
                                                        <img src={home} alt='' height='35px' width='35px'/>
                                                </div>
                                                <div className='navbar_tabs'>
                                                        <img src={groups} alt='' height='35px' width='35px'/>
                                                </div>
                                                <div className='navbar_tabs'>
                                                        <img src={friends} alt='' height='35px' width='35px'/>
                                                </div>
                                                <div className='navbar_tabs'>
                                                        <img src={messenger} alt='' height='35px' width='35px'/>
                                                </div>
                                        </div>
                                </Grid>
                                <Grid item xs={3}>
                                        <div className='navbar_rightbar'>
                                                <div className='navbar_righttab'>
                                                        <Avatar className='navbar_rightimg'/>
                                                        <div className='navbar_profileName'>DEMO_NAME</div>
                                        
                                                </div>
                                        </div>
                                </Grid>
                        </Grid>
                </div>
        )
}
