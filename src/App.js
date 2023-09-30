import React, { useState } from 'react';
import Login from './login';
import GoogleSignIn from './googlesignin'
import UserRegistration from './UserRegistration';
import SellerRegistration from './SellerRegistration';

function App() {
  return (
    <>
      <Login/>
    </>
  );
}


// <div className="App">
//         {isUserRegistration ? (
//           <UserRegistration switchToSellerRegistration={switchToSellerRegistration} />
//         ) : (
//           <SellerRegistration switchToUserRegistration={switchToUserRegistration} />
//         )}
// </div>


// const [isUserRegistration, setIsUserRegistration] = useState(true);

// const switchToUserRegistration = () => {
//   setIsUserRegistration(true);
// };

// const switchToSellerRegistration = () => {
//   setIsUserRegistration(false);
// };

export default App;
