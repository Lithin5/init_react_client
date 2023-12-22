import React from 'react'
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues:{
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("values", values);
    }
  });

  return (
    <Box sx={{ pt: 5 }} >
      <Container>
        <Grid container >
          <Grid item xs={12} md={3} >
            <div>Login</div>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username) }
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password) }
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button onClick={formik.submitForm} type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}
