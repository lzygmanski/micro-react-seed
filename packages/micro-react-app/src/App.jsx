import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '@lzygmanski/micro-react-module/dist/main.css';
import './App.css';

const MicroReactModule = lazy(() => import('@lzygmanski/micro-react-module'));

const App = () => (
  <Router>
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/module">Module</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Page is Loading...</div>}>
        <Switch>
          <Route path="/module" component={MicroReactModule} />
          <Route path="/">
            <h1>Hello from micro-rect-app!</h1>
          </Route>
        </Switch>
      </Suspense>
    </div>
  </Router>
);

export default hot(App);
