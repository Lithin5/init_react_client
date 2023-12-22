import React, { useState } from 'react'
import { Alert, Box, Button, Container, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/actions/authenticationActions';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setCurrentUser, setToken } from '../../redux/reducers/authenticationSlice';

export default function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const res = await dispatch(login(values));
      console.log("res", res);
      if (res?.payload?.success) {
        dispatch(setCurrentUser(res.payload.user));
        dispatch(setToken(res.payload.token));

        // navigate(`/`);
      } else {
        setError("Invalid username or password");
      }
    }
  });

  return (
    <Box sx={{ pt: 5 }} >
      <Container>
        <Grid container >
          <Grid item xs={12} md={3} >
            {error && <Alert severity='error'>{error}</Alert>}
            <br />
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
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}
