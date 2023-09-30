import React, { useState } from 'react';
import GoogleSignIn from './googlesignin';
import './App.css';

export default function Login() {
  const [showLogin, setLoginView] = useState(true);

  const toggleView = () => {
    setLoginView(!showLogin);
  };

  return (
    <div>

      {showLogin ? (
        
        <div>
           <button onClick={toggleView}>
            {'Switch to GoogleSignIn'}
          </button>
          <h2>Login</h2>
          <form>
            <p>-----------------------------------------------</p>
            <div>
              <label>Email:</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" name="password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <>
          <GoogleSignIn />
        </>
        
      )}
    </div>
  );
}