import React, { memo } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useParams
} from 'react-router-dom'

export default memo(function URLParamsExample() {
  return (
    <BrowserRouter>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to='/netflix/test'>Netflix</Link>
          </li>
          <li>
            <Link to='/zillow-group'>Zillow Group</Link>
          </li>
          <li>
            <Link to='/yahoo'>Yahoo</Link>
          </li>
          <li>
            <Link to='/modus-create'>Modus Create</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/:id' component={Child} />
          <Route path='/:id/test' component={Test} />
        </Switch>
      </div>
    </BrowserRouter>
  )
})



function Child(props) {
  console.log('props', props);

  const { id } = useParams()
  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

function Test(props) {
  console.log('props', props);

  const { id } = useParams()
  return (
    <div>
      <h3>Test - ID: {id}</h3>
    </div>
  );
}
