import React from 'react';

import TimelineMain from './components/timeline/TimelineMain';
// import FriendMain from './components/friend/FriendMain';

import { Provider } from 'react-redux';
import store from './common/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>REACT and REDUX</h1>
        <TimelineMain />
        {/* <FriendMain /> */}
      </div>
    </Provider>
  );
}

export default App;
