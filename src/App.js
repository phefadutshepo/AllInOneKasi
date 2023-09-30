import React, { useState } from 'react';
import UserRegistration from './UserRegistration';
import SellerRegistration from './SellerRegistration';

function App() {
  const [isUserRegistration, setIsUserRegistration] = useState(true);
  const [isLoginView, setIsLoginView] = useState(true);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle login submission, e.g., send data to the server
    console.log('Login Data:', loginData);
  };

  const switchToUserRegistration = () => {
    setIsUserRegistration(true);
    setIsLoginView(false);
  };

  const switchToSellerRegistration = () => {
    setIsUserRegistration(false);
    setIsLoginView(false);
  };

  const switchToLogin = () => {
    setIsLoginView(true);
    setIsUserRegistration(true);
  };

  return (
    <div className="App">
      {isLoginView ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={loginData.email} onChange={handleLoginInputChange} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" name="password" value={loginData.password} onChange={handleLoginInputChange} />
            </div>
            <button type="submit">Login</button>
          </form>
          <p>
            Not registered?{' '}
            <button onClick={switchToUserRegistration}>User Registration</button> |{' '}
            <button onClick={switchToSellerRegistration}>Seller Registration</button>
          </p>
        </div>
      ) : (
        isUserRegistration ? (
          <UserRegistration switchToSellerRegistration={switchToSellerRegistration} />
        ) : (
          <SellerRegistration switchToUserRegistration={switchToUserRegistration} />
        )
      )}
    </div>
  );
}

export default App;
