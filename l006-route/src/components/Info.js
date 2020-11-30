import React from 'react';
import { withRouter } from 'react-router-dom';

const Info = () => {
  return (
    <div>
      <WithRouterSample></WithRouterSample>
    </div>
  );
};

const WithRouterSample = withRouter((props) => {
  return (
    <div>
      <div>
        <h2>location</h2>
        <textarea
          name=""
          id=""
          cols="60"
          rows="15"
          readOnly
          value={JSON.stringify(props.location, null, 2)}
        ></textarea>
      </div>
      <div>
        <h2>match</h2>
        <textarea
          name=""
          id=""
          cols="60"
          rows="15"
          readOnly
          value={JSON.stringify(props.match, null, 2)}
        ></textarea>
      </div>
    </div>
  );
});

export default Info;
