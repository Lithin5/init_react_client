import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { selectCurrentUser } from '../../redux/selectors/authenticationSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/reducers/authenticationSlice';

export default function Layout({ children }) {
  const currentUser = useSelector(selectCurrentUser); 
  const navigate = useNavigate() ;
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate(`/login`);
  } 

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography component={Link} to="/" variant="h6" sx={{ flexGrow: 1, color: 'white', textDecoration: 'none' }}>
              Book App 
               - {currentUser && (currentUser.firstName)}
            </Typography>
            {currentUser ? (
              <Button onClick={handleLogout} color="inherit">Logout</Button>
            ):(
            <>
              <Button component={Link} to="/login" color="inherit">Login</Button>
              <Button component={Link} to="/register" color="inherit">Register</Button>
            </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {currentUser && (
      <Box sx={{ p:5 }} >
        {currentUser?.role === "admin" ?(
          <Button component={Link} to="/createbook" >Create Book</Button>
        ):(
          <Button>My Books</Button>
        ) }
      </Box>)}
      <Outlet />
    </div>
  )
}
