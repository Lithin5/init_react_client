import { Alert, Box, Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { selectCurrentUser } from '../../redux/selectors/authenticationSelectors';

export default function Home() {
  const currentUser = useSelector(selectCurrentUser);

  if (currentUser && currentUser.role === "admin") {
    return (
      <Box sx={{ p: 5 }} >
        <Alert severity='info'>Administrator Account</Alert>
      </Box>  
    )
  }
  if (currentUser) {
    return (
      <Box sx={{ p: 5 }} >
        <Alert severity='info'>User Account</Alert>
      </Box>  
    )
  }
  return (
    <Box sx={{ p: 5 }} >
      <Button component={Link} to="/login" >Login</Button>
      <Button component={Link} to="/list" >List</Button>
    </Box>
  )
}
