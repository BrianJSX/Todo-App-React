import { Drawer, Toolbar } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { compose } from "redux";
import ROUTER from "../../router";
import Styles from "./style";

class SideBar extends Component {
    render() {
        let { classes } = this.props;
        return (
            <div>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            {ROUTER.map((router, index) => (
                                <NavLink
                                    to={router.path}
                                    exact={router.exac}
                                    className={classes.MenuLink}
                                    activeClassName={classes.activeMenu}
                                >
                                    <ListItem button key={index}>
                                        <ListItemIcon>{router.icon}</ListItemIcon>
                                        <ListItemText primary={router.name} />
                                    </ListItem>
                                </NavLink>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default compose(withStyles(Styles))(SideBar);
