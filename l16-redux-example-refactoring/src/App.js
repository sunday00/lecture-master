import React from 'react';

// import * as Friend from "./services/friends/state";
// import * as Timeline from "./services/timeline/state";

// import store from "./common/store";

// store.dispatch( Timeline.addTimeline({ id: 1, desc: "aaaa" }) );
// store.dispatch( Timeline.addTimeline({ id: 2, desc: "bbbb" }) );

import TimelineMain from './components/timeline/TimelineMain';
// import FriendMain from './components/friend/FriendMain';

function App() {
  return (
    <div className="App">
      <h1>REACT and REDUX</h1>
      <TimelineMain />
      {/* <FriendMain /> */}
    </div>
  );
}

export default App;
