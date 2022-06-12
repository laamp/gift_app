import React from 'react';
import axios from 'axios';

const GiftApp = () => {
  const [test, setTest] = React.useState('not working');

  const makeRequest = () => {
    axios
      .get('/api/hello_world')
      .then((response) => {
        setTest(JSON.stringify(response.data));
      })
      .catch(() => {
        setTest('The request has failed.');
      })
  };

  return (
    <div className='GiftApp'>
      <h1 onClick={makeRequest}>👁👄👁</h1>
      <p>Output: {test}</p>
    </div>
  );
};

export default GiftApp;
