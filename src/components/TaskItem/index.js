import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core';
import Styles from './style';
import Typography from '@material-ui/core/Typography';
import BorderColorIcon from '@material-ui/icons/BorderColor';


class TaskItem extends Component {
    render() {
        const { classes } = this.props;
        let { task, status } = this.props;
        return (
            <Box component="div" m={1}>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="baseline"
                        >
                            <Grid item xs={6}>
                                {task.title}
                            </Grid>
                            <Grid item xs={6}>
                                {status.value}
                            </Grid>
                            <Grid item xs={12}>
                                <Box mt={3}>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {task.description === "" ? "Không có thông tin mô tả" : task.description }
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid
                          container
                          direction="row"
                          justify="flex-end"
                          spacing={1}
                        >
                            <Grid item  >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    startIcon={<BorderColorIcon></BorderColorIcon>}
                                >
                                    Update
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<DeleteIcon />}
                                >
                                    Delete
                                </Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Box>
        );
    }
}

export default withStyles(Styles)(TaskItem);