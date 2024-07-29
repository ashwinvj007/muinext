// pages/register/[id].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, CssBaseline, Typography, Box, TextField, Button, MenuItem, FormControl, InputLabel, Select, Snackbar, Alert, CircularProgress } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    gender: '',
    occupation: '',
    bio: '',
    password: ''
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

 // Fetch user data if ID is present in the URL
 useEffect(() => {
  if (id) {
    fetch(`http://localhost:3001/auth/register/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setInitialValues(data);
        setIsUpdate(true);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch user data:', error);
        setLoading(false);
      });
  } else {
    setLoading(false);
  }
}, [id]);

  // Define Yup schema for form validation
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: Yup.string().required('Email is required').email('Invalid email address'),
    phoneNumber: Yup.string().required('Phone number is required').matches(/^[0-9]{10}$/, 'Invalid phone number'),
    address: Yup.string().required('Address is required'),
    gender: Yup.string().required('Gender is required').oneOf(['Male', 'Female', 'Other'], 'Invalid gender'),
    occupation: Yup.string().required('Occupation is required'),
    bio: Yup.string().max(500, 'Bio cannot exceed 500 characters'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
  });

  const handleSubmit = async (values: any, actions: any) => {
    try {
      const response = await fetch(`http://localhost:3001/auth/${isUpdate ? `update/${id}` : 'signup'}`, {
        method: isUpdate ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(isUpdate ? 'Failed to update' : 'Failed to register');
      }

      // Show success message
      setShowSuccess(true);

      // Reset form if it's a registration
      if (!isUpdate) {
        actions.resetForm();
      }
    } catch (error) {
      console.error(isUpdate ? 'Update failed:' : 'Registration failed:', error);
      // Handle error state or display error message to user
    } finally {
      actions.setSubmitting(false); // Reset form submission state
    }
  };

  const handleCloseSnackbar = () => {
    setShowSuccess(false);
  };

  if (loading) {
    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {isUpdate ? 'Update' : 'Register'}
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {(formik) => (
            <Form noValidate>
              {/* Name */}
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                error={formik.touched.name && !!formik.errors.name}
                helperText={formik.touched.name && formik.errors.name}
              />

              {/* Email */}
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
              />

              {/* Phone Number */}
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phone"
                error={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              />

              {/* Address */}
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                error={formik.touched.address && !!formik.errors.address}
                helperText={formik.touched.address && formik.errors.address}
              />

              {/* Gender */}
              <FormControl fullWidth variant="outlined" margin="normal" required error={formik.touched.gender && !!formik.errors.gender}>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Field
                  as={Select}
                  labelId="gender-label"
                  id="gender"
                  name="gender"
                  label="Gender"
                >
                  <MenuItem value="">Select Gender</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Field>
                <ErrorMessage name="gender" component="div" className="error" />
              </FormControl>

              {/* Occupation */}
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="occupation"
                label="Occupation"
                name="occupation"
                autoComplete="occupation"
                error={formik.touched.occupation && !!formik.errors.occupation}
                helperText={formik.touched.occupation && formik.errors.occupation}
              />

              {/* Bio */}
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                id="bio"
                label="Bio"
                name="bio"
                autoComplete="bio"
                multiline
                rows={4}
                error={formik.touched.bio && !!formik.errors.bio}
                helperText={formik.touched.bio && formik.errors.bio}
              />

              {/* Password */}
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                error={formik.touched.password && !!formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                disabled={!formik.isValid || formik.isSubmitting}
              >
                {formik.isSubmitting ? 'Submitting...' : isUpdate ? 'Update' : 'Register'}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Snackbar open={showSuccess} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {isUpdate ? 'Update successful!' : 'Registration successful!'}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RegisterPage;
