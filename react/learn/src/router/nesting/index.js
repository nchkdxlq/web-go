import React, { memo } from 'react'

import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom'

 export default memo(function NestingExample() {
  return (
    <BrowserRouter>
     <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/topics'>Topics</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/topics'>
            <Topics />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
})

function Home() {
  return (
    <h2>Home</h2>
  )
}


function Topics() {
  const result = useRouteMatch();
  console.log(result);

  // [?] path 、url有什么区别
  const { path, url } = result;

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. state</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  )
}

function Topic() {
  const { topicId } = useParams();
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  )
}
