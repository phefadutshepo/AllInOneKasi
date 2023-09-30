import React, { useState } from 'react';
import UserRegistration from './UserRegistration';
import SellerRegistration from './SellerRegistration';

function App() {
  const [isUserRegistration, setIsUserRegistration] = useState(true);

  const switchToUserRegistration = () => {
    setIsUserRegistration(true);
  };

  const switchToSellerRegistration = () => {
    setIsUserRegistration(false);
  };

  return (
    <div className="App">
      {isUserRegistration ? (
        <UserRegistration switchToSellerRegistration={switchToSellerRegistration} />
      ) : (
        <SellerRegistration switchToUserRegistration={switchToUserRegistration} />
      )}
    </div>
  );
}

export default App;
