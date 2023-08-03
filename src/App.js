// require('dotenv').config()
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
      <h1>Welcome to Auth0 React App</h1>
    </div>
  );
}

export default App;
