import { Grid } from '@mui/material'
import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Card from '../../Card/Card'
import './HomePage.css'

function HomePage() {
  return (
    <div>
      <NavBar />
      <Grid  container className='homepage__main'>
        <Grid item xs={3}> <div className='homepage__profile'>Profile</div></Grid>
        <Grid item xs={6}> <div className='homepage__timeline'>Timeline</div></Grid>
        <Grid item xs={3}> <div className='homepage__friends' >Friends</div></Grid>
      </Grid>
    </div>
  )
}

export default HomePage