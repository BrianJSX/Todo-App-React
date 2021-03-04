import React, { Component } from 'react';
import { Toolbar, Container, Grid, Box } from '@material-ui/core';

class HomePage extends Component {
    render() {
        return (
            <Container>
                <Toolbar></Toolbar>
                <Grid container>
                    <Box component='div'>
                        <h1>Trang chủ</h1>
                    </Box>
                </Grid>
            </Container>
        );
    }
}

export default HomePage;