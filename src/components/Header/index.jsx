import React from 'react';
import './styles.less';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Device detector
import { isMobile } from 'react-device-detect';


const Header = () => (
    <div>
        <AppBar position="fixed" className="mainNavBarTop" color="inherit">
            <Toolbar>
                {isMobile ? (
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                ) : ''}
                <Typography variant="h6">
                        News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </div>
);

export default Header;
