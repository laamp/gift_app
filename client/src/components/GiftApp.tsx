import React from 'react';

const GiftApp = () => {
  const [count, setCount] = React.useState(1);

  return (
    <div className='GiftApp'>
      <h1 onClick={() => setCount(count + 1)}>Gift App ✨</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default GiftApp;
