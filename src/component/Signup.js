import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
export default function Signup() {
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
    const marginTopStyle = { marginTop: '10px' }
    const bgColor = { bgcolor: '#a8dadc' }
    return (
        <>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar sx={bgColor} />
                        <Typography variant='h4'>Sign Up</Typography>
                        <Typography variant='caption'>Please fill this form to create an account!</Typography>
                        <TextField fullWidth id="standard-basic" label="First Name" variant="standard" />
                        <TextField fullWidth id="standard-basic" label="Last Name" variant="standard" sx={marginTopStyle} />
                        <TextField fullWidth id="standard-basic" type='email' label="Email" variant="standard" sx={marginTopStyle} />
                        <TextField fullWidth id="standard-basic" type='password' label="Password" variant="standard" sx={marginTopStyle} />
                        <TextField fullWidth id="standard-basic" type='password' label="Confirm Password" variant="standard" sx={marginTopStyle} />
                       <Link to='Signin' style={{textDecoration:'none'}} > <Button variant="contained" color='success' sx={marginTopStyle}>Sign Up</Button> </Link>
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}
