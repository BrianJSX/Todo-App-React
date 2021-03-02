import { withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as ActionTaskCreator from '../../actions';
import Styles from './style';


class TaskItem extends Component {

    onDeleteTask = (id) =>  {
        if(window.confirm('bạn có muốn xóa sản phẩm này không')){
            let {ActionTaskCreator} = this.props;
            let {actDeleteTask} = ActionTaskCreator;
            actDeleteTask(id);
        }
    }

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
                                        {task.description === '' ? 'Không có thông tin mô tả' : task.description }
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
                                    onClick={() => this.onDeleteTask(task.id)}
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
const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
    return {
        ActionTaskCreator :  bindActionCreators(ActionTaskCreator, dispatch)
    };
};

export default compose(
    withStyles(Styles),
    connect(mapStateToProps, mapDispatchToProps),
)(TaskItem);
