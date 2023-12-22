import React, { useState } from "react";
import { Alert, Box, Button, Container, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createBook } from "../../../redux/actions/bookActions";
import { useDispatch } from 'react-redux';

export default function CreateBook() {

    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),        
        author: Yup.string().required('Author is required'),
      });
    
    const formik = useFormik({
        initialValues: {
          name: '',
          author: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log("values", values);
            const res =  await dispatch(createBook(values));
            console.log("res", res);
        //   const res = await dispatch(login(values));      
        //   if (res?.payload?.success) {
        //     // dispatch(setCurrentUser(res.payload.user));
        //     // dispatch(setToken(res.payload.token));
        //     // navigate(`/`);
        //   } else {
        //     setError("Invalid username or password");
        //   }
        }
      });

    return (
        <div>
            <Container>
                <Grid container >
                    <Grid item xs={12} md={3} >
                        <div>Register</div>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            label="Author"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="author"
                            value={formik.values.author}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.author && Boolean(formik.errors.author)}
                            helperText={formik.touched.author && formik.errors.author}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} >
                        <Button onClick={formik.submitForm} >Create</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}