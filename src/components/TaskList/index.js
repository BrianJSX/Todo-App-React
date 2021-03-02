import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Styles from './style';
import TaskItem from '../TaskItem';
import Grid from '@material-ui/core/Grid';


class TaskList extends Component {
    render() {
        const { classes } = this.props;
        let {taskFilter, status} = this.props;
        return (
            <Grid item xs={4}>
                <div className={classes.card__header}>
                    {status.value}
                </div>
                <div className={classes.card__task}>
                    {
                        taskFilter.map((task, index) => {
                            return (
                                <TaskItem task={task} status={status} key={index}></TaskItem>
                            );
                        })
                    }
                </div>
            </Grid>
        );
    }
}

export default withStyles(Styles)(TaskList);