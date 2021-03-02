import { withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { bindActionCreators } from 'redux';
import * as actionCreator from '../../actions/index';
import LoadingPage from '../../components/LoadingPage';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import STATUSCODE from '../../constants/StatusCode';
import styles from './style';
import ROUTER from '../../router';
import AdminLayout from '../../components/AdminLayout';


class TaskBoardContainer extends Component {

    componentDidMount() {
        let { taskActionCreator } = this.props;
        let { actFetchTask } = taskActionCreator;
        actFetchTask();
    }

    rederTaskItem = () => {
        let { listTask } = this.props;

        let xhtml = null;
        xhtml = STATUSCODE.map((status, index) => {
            const taskFilter = listTask.filter((task) => typeof (task.status) == 'string' ? Number(task.status) === status.id : task.status === status.id);
            return (
                <TaskList taskFilter={taskFilter} status={status} key={index}>
                </TaskList>
            );
        });
        return xhtml;
    }

    renderMenu = () => {
        let xhtml = null;
        xhtml = ROUTER.map((router, index) => {
            return (
                <AdminLayout key={index} path={router.path} exact={router.exac} component={router.component}></AdminLayout>
            );
        });
        return xhtml;
    }

    render() {

        return (
            <Container>
                <LoadingPage></LoadingPage>
                <ToastContainer />
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
        listTask: state.tasks,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        taskActionCreator: bindActionCreators(actionCreator, dispatch),
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoardContainer));
