import React from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { increment } from 'modules/session/sessionSlice';

const GiftApp = () => {
  const count = useAppSelector((state) => state.session.testValue);
  const dispatch = useAppDispatch();

  return (
    <div className='GiftApp'>
      <h1>Gift App ✨</h1>
      <p onClick={() => dispatch(increment())}>Count: {count}</p>
    </div>
  );
};

export default GiftApp;
