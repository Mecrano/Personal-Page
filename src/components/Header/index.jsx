/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles.less';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

// Device detector
import { isMobile } from 'react-device-detect';

// Import menu data
import { MenuData } from '../../config';

const Header = (props) => {
    const { location: { pathname } } = props;

    return (
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
                        <Link href={menu.route} className={menu.route === pathname ? 'active' : ''} color="textPrimary" underline="none">
                            {menu.name}
                        </Link>
                    </Typography>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default withRouter(Header);
