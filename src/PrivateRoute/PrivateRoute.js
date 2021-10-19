import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user}=useAuth();
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/contact",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;