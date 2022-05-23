import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
  const bgColor = { bgcolor: '#a8dadc' }
  const marginTopStyle = { marginTop: '30px' }


  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align='center'>
            <Avatar sx={bgColor} />
            <Typography variant='h4' >Log In</Typography>
            <TextField fullWidth id="standard-basic" type='email' label="Email" variant="standard" sx={marginTopStyle} />
            <TextField fullWidth id="standard-basic" type='password' label="Password" variant="standard" sx={marginTopStyle} />
            <Link to='/Deshboard' style={{textDecoration:'none'}} > <Button variant="contained" color='success' sx={marginTopStyle}>Login To Deshboard</Button> </Link>
            <Link to='/' style={{textDecoration:'none'}} > <Button variant="contained" color='error' sx={marginTopStyle}>Back</Button> </Link>
          
          </Grid>
        </Paper>
      </Grid>

    </>
  )
}
