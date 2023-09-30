import React, { useState } from 'react';
import './App.css';

const SellerRegistration = ({ switchToUserRegistration }) => {
  const [sellerData, setSellerData] = useState({
    companyName: '',
    taxId: '',
    // Add more seller-specific fields here.
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSellerData({
      ...sellerData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send seller registration data to the server or perform necessary actions.
    console.log('Seller Registration Data:', sellerData);
  };

  return (
    <div className="container">
      <h2>Seller Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={sellerData.companyName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Tax ID:</label>
          <input
            type="text"
            name="taxId"
            value={sellerData.taxId}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more seller-specific fields here. */}
        <button type="submit">Register as Seller</button>
      </form>
      <p>
        Want to register as a user?{' '}
        <button onClick={switchToUserRegistration}>Switch to User Registration</button>
      </p>
    </div>
  );
};

export default SellerRegistration;
