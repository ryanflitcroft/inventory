import React from 'react';
import { useState } from 'react';
import { signIn,
  signUp } from '../../services/fetch-utils';

export default function Auth({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAccount, setHasAccount] = useState(true);

  async function handleAuth(e) {
    e.preventDefault();
    if (hasAccount) {
      const user = await signIn(email, password);
      console.log('||signinuser: ', user);

      // FIXME: 
      setUser(user);
    } else {
      const user = await signUp(email, password);
      console.log('||signupuser: ', user);

      // FIXME: 
      setUser(user);
    }
  }

  return (
    <>
      <section>
        <form onSubmit={handleAuth}
          id='auth-form'>
          <label htmlFor='email'>Email</label>
          <input onChange={(e) => setEmail(e.target.value)}
            value={email}
            name='email'
            type='email'
            required />
          <label htmlFor='password'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)}
            value={password}
            name='password'
            type='password'
            required />
          {
            hasAccount
              ? <>
                <p>New User?<span onClick={() => setHasAccount(false)}>SignUp</span></p>
                <button onClick={handleAuth}
                  type='submit'
                  form='auth-form'>SignIn</button>
              </>
              : <>
                <p>Already a user?<span onClick={() => setHasAccount(true)}>SignIn</span></p>
                <button onClick={handleAuth}
                  type='submit'
                  form='auth-form'>SignUp</button>
              </>
          }
        </form>
      </section>
    </>
  );
}