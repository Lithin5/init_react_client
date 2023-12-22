import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Box sx={{ p:5 }} >      
      <Button component={Link} to="/login" >Login</Button>      
      <Button component={Link} to="/list" >List</Button>      
    </Box>
  )
}
