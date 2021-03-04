import React, { Component } from 'react';
import Style from './style';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Header from '../Header';
import SideBar from '../SideBar';
import Grid from '@material-ui/core/Grid';


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openSideBar: true
        };
    }

    onChangeSibar = () => {
        const { openSideBar } = this.state;
        this.setState({
            openSideBar: !openSideBar
        });
    }

    render() {
        const { children } = this.props;
        const { openSideBar } = this.state;
        const { classes } = this.props;
        return (
            <div className="tasks__container">
                <Header onChangeSibarIndex={this.onChangeSibar}></Header>
                <Grid container direction="row" >
                    <Grid item xs={openSideBar ? 2 : 0}>
                            {
                                openSideBar ? <SideBar></SideBar> : ''
                            }
                    </Grid>
                    <Grid item xs={openSideBar ? 10 : 12}>
                        {children}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default compose(
    withStyles(Style)
)(Dashboard);