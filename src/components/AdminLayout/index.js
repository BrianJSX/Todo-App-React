import React, { Component } from 'react';
import Dashboard from '../Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class AdminLayout extends Component {
    render() {
        const { component: YourComponent, ...remainProps } = this.props;
        return (
            <Router>
                <Switch>
                    <Route
                    {...remainProps}
                    render={routeProps => (
                        <Dashboard>
                            <YourComponent {...routeProps} ></YourComponent>
                        </Dashboard>
                      )}
                    >
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default AdminLayout;