import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
    
} from 'react-router-dom';


  export default function App() {
      const posts = [
          {
              id: 1,
              title: "cars info",
              
          }
      ];
      return (
          <Router>
              <div>
                  <ul>
                      <li>
                          <link to="/">home</link>
                      </li>
                      <li>
                          <link to="/info">Info</link>
                      </li>
                      <li>
                          <link to="/posts">how to drift</link>
                      </li>
                  </ul>
                  <Switch>
                      <Route path='/posts'>
                          <Posts posts={posts} />
                      </Route>
                      <Route path="/info">
                          <Info  names={['tom', 'sally',]}/>
                      </Route>
                      <Route path="/">
                          <Home />
                          </Route>
                  </Switch>
              </div>
          </Router>
          
      );
}
function Home() {
      return <h2>home</h2>
}
function Info() {
    return<h2>Info</h2>
}
function Posts() {
    return <h2>how to drift</h2>
}