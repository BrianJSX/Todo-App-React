import React, { Component } from 'react';
import styles from './style';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core';
import STATUSCODE from '../../constants/StatusCode';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

const listTask = [
    {
        id: 1,
        title: "play game",
        description: "sdadsadsa",
        status: 1
    },
    {
        id: 2,
        title: "play game 2",
        description: "",
        status: 2
    },
    {
        id: 3,
        title: "play game 3",
        description: "",
        status: 3
    }
];

class TaskBoardContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state =  { 
            openForm :  true
        }
    }

    rederTaskItem = () => {
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

export default withStyles(styles)(TaskBoardContainer);