import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import React, { Component } from 'react';
import { compose } from 'redux';
import Styles from './style';

const listBar = [
    {
        name: 'Trang chủ',
        icon: <HomeIcon />
    },
    {
        name: 'Quản lý công việc',
        icon: <WorkIcon />
    }

];

class SideBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div
                className={classes.list}
                role="presentation"
            >
                <List>
                    {
                        listBar.map((text, index) => {
                            return (
                                <ListItem button key={index}>
                                    <ListItemIcon>{text.icon}</ListItemIcon>
                                    <ListItemText primary={text.name} />
                                </ListItem>
                            );
                        })
                    }
                </List>
            </div>
        );
    }

}

export default compose(
    withStyles(Styles)
)(SideBar);