import React, { Component } from 'react';
import TaskBoardContainer from './containers/TaskBoard';
import { Provider } from 'react-redux';
import configStore from './redux/configStore';

const store = configStore();

class App extends Component {
  render() {
    return (
      <div>
          <Provider store= {store}>
            <TaskBoardContainer></TaskBoardContainer>
          </Provider>
      </div>
    );
  }
}

export default App;