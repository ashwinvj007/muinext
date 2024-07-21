// src/components/Footer.tsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material'; // Example with Material-UI components

const Footer: React.FC = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    © {new Date().getFullYear()} Next.js App. All rights reserved.
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;