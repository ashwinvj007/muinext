import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button component="a" href="/home">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component="a" href="/login">
                    <ListItemText primary="Log In" />
                </ListItem>
                <ListItem button component="a" href="/register">
                    <ListItemText primary="Register" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        <Link href="/home" passHref>
                            <img src="/images/logo.jpg" alt="Logo" style={{ height: 60, cursor: 'pointer' }} />
                        </Link>
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Link href="/login" passHref>
                            <Button variant="contained" color="primary">
                                Log In
                            </Button>
                        </Link>
                        <Link href="/register" passHref>
                            <Button variant="contained" color="primary">
                                Register
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
            </Drawer>
        </>
    );
};

export default Header;
