import React, { memo } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useLocation
} from 'react-router-dom'


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default memo(function QueryParamsExample() {
  
  return (
    <BrowserRouter>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to='/account?name=netflix'>Netflix</Link>
          </li>
          <li>
            <Link to='/account?name=zillow-group'>Zillow Group</Link>
          </li>
          <li>
            <Link to='/account?name=yahoo'>Yahoo</Link>
          </li>
          <li>
            <Link to='/account?name=modus-create'>Modus Create</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/' component={NoMath} />
          <Route path='/account' component={Child} />
        </Switch>
      </div>
    </BrowserRouter>
  )
})

function Child(props) {
  console.log('props', props);
  const query = useQuery();
  return (
    <h3>The <code>name</code> in the query string is &quot;{query.get('name')}&quot;</h3>
  );
}

function NoMath() {
  return (
    <h3>There is no name in the query string</h3>
  )
}
