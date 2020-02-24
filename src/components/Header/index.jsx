/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './styles.less';

// SmoothScrolling
import { Link } from 'react-scroll';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Device detector
import { isMobile } from 'react-device-detect';

// Import menu data
import { MenuData } from '../../config';

const Header = () => (
    <AppBar position="fixed" className="mainNavBarTop" color="inherit">
        <Toolbar>
            {isMobile ? (
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            ) : ''}
            {MenuData.map((menu) => (
                <Typography variant="h5" key={menu.id}>
                    {menu.icon}
                    <Link
                        activeClass="active"
                        to={menu.route}
                        spy
                        smooth
                        duration={500}
                    >
                        {menu.name}
                    </Link>
                </Typography>
            ))}
        </Toolbar>
    </AppBar>
);

export default Header;
