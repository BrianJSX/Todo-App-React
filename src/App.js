import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configStore from './redux/configStore';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './common/theme';
import ROUTER from './router';
import AdminLayout from './components/AdminLayout';
import CssBaseline from '@material-ui/core/CssBaseline';


const store = configStore();

class App extends Component {

  renderMenu = () => {
    let xhtml = null;
    xhtml = ROUTER.map((router, index) => {
      return (
        <AdminLayout key={index} component={router.component} path={router.path} exact={router.exac} ></AdminLayout>
      );
    });
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {this.renderMenu()}
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;