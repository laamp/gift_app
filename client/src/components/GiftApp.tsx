import React, { useState } from 'react';

import { useAppDispatch } from 'hooks';
import { loginUser } from 'modules/session/sessionSlice';

const GiftApp = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='GiftApp'>
      <h1>Gift App ✨</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Form submitted with', email, password);
          dispatch(loginUser({ email, password }));
        }}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
};

export default GiftApp;
