// pages/index.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography
} from '@mui/material';

const IndexPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSignInClick = () => {
    // Replace with actual sign-in logic
    // For demonstration, we're setting a static email
    const userEmail = 'example@email.com';
    setEmail(userEmail);
    router.push(`/register?email=${encodeURIComponent(userEmail)}`);
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
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
            type="button"
            fullWidth
            variant="contained"
            onClick={handleSignInClick}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        <Grid container>
          <Grid item xs>
            <Link href="#" passHref>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/register" passHref>
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

export default IndexPage;
