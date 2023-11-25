import React from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Header() {
    return (
        <AppBar position="fixed" className="topNav">
            <Toolbar>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <   img src="/logo96.png" alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
                        <Typography variant="h6">Me K Go</Typography>
                        <div className="vertical-bar" />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;