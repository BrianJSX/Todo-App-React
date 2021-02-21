import { withStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import STATUSCODE from '../../constants/StatusCode'
import styles from './style';
import {connect} from 'react-redux';
import {actFetchTaskRequest} from '../../actions/index';


class TaskBoardContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openForm: true
        };
    }
    componentDidMount() { 
        this.props.onFetchTasks();
    }
    rederTaskItem = () => {
        let {listTask} = this.props;
        let xhtml = null;
        xhtml = STATUSCODE.map((status, index) => {
            const taskFilter = listTask.filter((task) => task.status === status.id);
            return (
                <TaskList taskFilter={taskFilter} status={status} key={index} ></TaskList>
            );
        });
        return xhtml;
    }

    render() {
        return (
            <Container>
                <Box component="div" m={1}>
                    <TaskForm></TaskForm>
                </Box>
                <Box component="div" mt={3}>
                    <Grid
                        container
                        direction="row"
                    >
                        {this.rederTaskItem()}
                    </Grid>
                </Box>
            </Container>
        );
    }
}
const mapStateToProps = (state) => { 
    return {
        listTask : state.tasks
    }
};

const mapDispatchToProps = (dispatch, props) => { 
    return {
        onFetchTasks: () => { 
            dispatch(actFetchTaskRequest());
        }
    }
};

export default withStyles(styles) (connect(mapStateToProps, mapDispatchToProps)(TaskBoardContainer))
