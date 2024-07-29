import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, Avatar, Box, Checkbox, Container, CssBaseline, 
  FormControlLabel, Grid, TextField
} from '@mui/material';
import { useRouter } from 'next/navigation';
import RegisterPage from './RegisterForm';
import Link from 'next/link';



const SignInForm: React.FC = () => {
  const router = useRouter(); // Initialize useRouter

  const handleSignUpClick = () => {
    router.push('localhost:3000/RegisterPage'); // Replace with your actual route

    
  };
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSignUpClick}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        <Grid container>
          <Grid item xs>
            <Link href="#" >
              Forgot password?
            </Link>
          </Grid>
          <Grid item>

          

            <Link href="/register" >
              <Button variant="contained" color="primary" sx={{ mt: 4 }}>
                Don't have an account? Sign Up
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignInForm;
