import React from 'react'
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/actions/authenticationActions';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('firstName is required'),
    lastName: Yup.string().required('lastName is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const res = await dispatch(register(values));
      if (res?.payload?.success) {
        navigate(`/login`);
      }
    }
  });

  return (
    <Box sx={{ pt: 5 }} >
      <Container>
        <Grid container >
          <Grid item xs={12} md={3} >
            <div>Register</div>
            <TextField
              label="firstName"
              variant="outlined"
              fullWidth
              margin="normal"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              label="lastName"
              variant="outlined"
              fullWidth
              margin="normal"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
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
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button onClick={formik.submitForm} type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}
