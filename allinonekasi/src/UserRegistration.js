import React, { useState } from 'react';
import './App.css';

const UserRegistration = ({ switchToSellerRegistration }) => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send user registration data to the server or perform necessary actions.
    console.log('User Registration Data:', userData);
  };

  return (
    <div className="container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register as User</button>
      </form>
      <p>
        Already a seller?{' '}
        <button onClick={switchToSellerRegistration}>Switch to Seller Registration</button>
      </p>
    </div>
  );
};

export default UserRegistration;
