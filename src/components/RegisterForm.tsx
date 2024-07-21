import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Avatar,
    Box,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    TextField,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
} from '@mui/material';
import Link from 'next/link';


const RegisterForm: React.FC = () => {
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value);
    };

    const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDob(event.target.value);
    };

    
  
    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
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
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
                <Typography component="h1" variant="h5">
                    Sign up
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
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="dob"
                        label="Date of Birth"
                        name="dob"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleDobChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        onChange={handlePhoneChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        multiline
                        rows={4}
                        onChange={handleAddressChange}
                    />
                    {/* Add other form fields as needed */}
                    {/* ... */}
                    <RadioGroup
    aria-label="gender"
    name="gender"
    value={gender}
    onChange={handleGenderChange}
>
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    {/* Add more options if needed */}
</RadioGroup>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign Up
                    </Button>
                </Box>
                <Box mt={2}>
                <Link href="/login" passHref>
                    <Button variant="contained" color="primary" sx={{ mt: 4 }}>
                        go to log in
                    </Button>
                </Link>
                </Box>
            </Box>
            <Box mt={5} textAlign="center">
                <Typography variant="body2" color="textSecondary">
                    © {new Date().getFullYear()} Your Company Name
                </Typography>
            </Box>
        </Container>
    );
};

export default RegisterForm;
