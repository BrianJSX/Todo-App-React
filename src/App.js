import React, { Component } from 'react';
import TaskBoardContainer from './containers/TaskBoard';

class App extends Component {
  render() {
    return (
      <div>
          <TaskBoardContainer></TaskBoardContainer>
      </div>
    );
  }
}

export default App;