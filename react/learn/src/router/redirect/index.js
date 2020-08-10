import React, { memo } from 'react'
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom'

export default memo(function AuthExample() {
  console.log('AuthExample');

  return (
    <BrowserRouter>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to='/public'>Public Page</Link>
          </li>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/public'>
            <PublicPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <PrivateRoute path='/protected'>
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </BrowserRouter>
  )
})


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signOut(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
}

function AuthButton() {
  const history = useHistory()

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          fakeAuth.signOut(() => { history.push('/') });
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}


function PrivateRoute({ children, ...rest }) {
  const location = useLocation();
  console.log('PrivateRoute', location);
  console.log('rest', rest);
  // return (
  //   <Rout {...rest}
  //     render={ ({ location }) =>
  //       fakeAuth.isAuthenticated
  //       ? children
  //       : (
  //         <Redirect to={{pathname: '/login', state: { from: location }}}/>
  //       )
  //     }
  //   />
  // );

  return (
    <Route {...rest}>
      {
        fakeAuth.isAuthenticated 
        ? children
        : <Redirect to={{pathname: '/login', state: { from: location }}} />
      }
    </Route>
  )

  // return (
  //   fakeAuth.isAuthenticated ? children : <Redirect to={{pathname: '/login', state: { from: location }}} />
  // );
}


function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  const location = useLocation();
  console.log('ProtectedPage', location);
  return <h3>Protected</h3>
}

function LoginPage() {
  const history = useHistory();
  const location = useLocation();
  console.log('LoginPage', location);
  
  const { from = { pathname: "/" } } = location.state;
  console.log('from', from);

  const login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}