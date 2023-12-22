import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { selectCurrentUser } from '../../redux/selectors/authenticationSelectors';
import { useSelector } from 'react-redux';

export default function Layout({ children }) {
  const currentUser = useSelector(selectCurrentUser);
  console.log("currentUser", currentUser);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography component={Link} to="/" variant="h6" sx={{ flexGrow: 1, color: 'white', textDecoration: 'none' }}>
              Book App
            </Typography>
            <Button component={Link} to="/login" color="inherit">Login</Button>
            <Button component={Link} to="/register" color="inherit">Register</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </div>
  )
}
