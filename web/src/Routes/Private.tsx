import React, { Component, useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import {isAuthenticated} from '../FakeAuth';


interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component?: any;
  // tslint:disable-next-line:no-any
  children?: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, children, ...rest } = props;

  return (
    <Route
      {...rest}
      render={routeProps =>
        isAuthenticated() ? (
          Component ? (
            <Component {...routeProps} />
          ) : (
            children
          )
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;


// const RoutesPrivate = ({ component: Component, ...rest}) => {
//   const { token } = useContext(StoreContext);

//   return (
//     <Route
//       {...rest}
//       render={() => token
//         ? <Component {...rest} />
//         : <Redirect to="/login" />
//       }
//     />
//   )
// }

// export default RoutesPrivate;

// interface PrivateRouteProps extends RouteProps {
//   // tslint:disable-next-line:no-any
//   component?: any;
//   // tslint:disable-next-line:no-any
//   children?: any;
// }

// const PrivateRoute = ({ component: Component, ...rest}) => {
//   <Route 
//     {... rest} 
//     render={props => isAuthenticated() ? (
//       <Component {...props} />
//       ) : (
//           <Redirect to={{ pathname: '/', state: { from: props.location} }} />
//       )
    
//           }
//   />
//   }

// export default PrivateRoute;