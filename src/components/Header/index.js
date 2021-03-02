import { AppBar, Badge, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import React, { Component } from 'react';
import { compose } from 'redux';
import Styles from './style';

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            mobileMoreAnchorEl: null,
        };
    };

    handleMenuClose = () => {
       this.setState({
            anchorEl: null,
       });
    };

    handleProfileMenuOpen = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
       });
    };

    onChangeSideBar = () =>  { 
        this.props.onChangeSibarIndex();
    }

    render() {
        const { classes } = this.props;
        const {anchorEl} = this.state;
        
        const menuId = 'primary-search-account-menu';
        const isMenuOpen = Boolean(anchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>logout</MenuItem>
            </Menu>
        );

        return (
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon onClick={() => this.onChangeSideBar()} />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Quản lý công việc
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                // aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                // onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
            </div>
        );
    }
}

export default compose(
    withStyles(Styles),
)(Header);