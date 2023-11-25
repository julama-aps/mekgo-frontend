import React from 'react';
import './Footer.css';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { GitHub } from '@mui/icons-material';

function Footer() {
    const openSocialMediaProfile = (url) => {
        window.open(url, '_blank');
    };

    return (
        <Paper elevation={3} square className="footer">
            <Typography variant="body2" align="center">
                © 2023 Me K Go. WebApp by Julama Apps.
            </Typography>
            <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginTop: '10px', height: "100%"}}>
                <IconButton onClick={() => openSocialMediaProfile('https://github.com/julama-aps')}>
                    <GitHub />
                </IconButton>
            </div>
        </Paper>
    );
}

export default Footer;
