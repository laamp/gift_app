import React, { useState, FormEvent } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { loginAction } from 'modules/session';

const GiftApp = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.ui.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLoginForm = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginAction({ email, password }));
  };

  return (
    <div className='GiftApp'>
      <h1>Gift App ✨</h1>
      <form onSubmit={submitLoginForm}>
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
      <div>{loading ? 'app is loading...' : 'app is not loading'}</div>
    </div>
  );
};

export default GiftApp;
