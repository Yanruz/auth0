# Getting Started with Create React App

Here are the steps to create the sample React app:

Step 1: Set up the React App
Create a new React app using Create React App tool:

```bash
npx create-react-app auth0-sample-app
cd auth0-sample-app
```

Step 2: Install Dependencies
Install the necessary dependencies for Auth0 integration and routing:

```bash
npm install @auth0/auth0-react react-router-dom
```

Step 3: Create Auth0 Configuration File
Create a new file in the root of the project named `.env` and add your Auth0 credentials:

```
REACT_APP_AUTH0_DOMAIN=your_auth0_domain
REACT_APP_AUTH0_CLIENT_ID=your_auth0_client_id
REACT_APP_AUTH0_REDIRECT_URI=http://localhost:3000/callback
REACT_APP_AUTH0_AUDIENCE=https://your_auth0_api_identifier
```

Step 4: Set Up Auth0 Context
Create a new file named `Auth0ProviderWithHistory.js` in the `src` folder and add the following code:

```jsx
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      audience={audience}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
```

Step 5: Set Up Routing
Edit the `src/index.js` file to wrap the app with the `Auth0ProviderWithHistory` component and set up routing:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);
```

Step 6: Use Auth0 in App Component
Edit the `src/App.js` file to use Auth0 for login and logout:

```jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Hello, {user.name}</h1>
          <button onClick={() => logout()}>Logout</button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
    </div>
  );
};

export default App;
```

Step 7: Start the Development Server
Finally, start the development server to see your app in action:

```bash
npm start
```

Now, your React app should be integrated with Auth0 for authentication. When you run the app, you should see a login button, and upon clicking it, you'll be redirected to the Auth0 login page. After successful login, you'll see a welcome message with your name and a logout button.

Remember that this is just a basic example. In a real-world application, you would have more complex routing and features based on user authentication status. Additionally, you should consider implementing error handling, role-based access control, and other security measures to ensure a robust and secure authentication system.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
