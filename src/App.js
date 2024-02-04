// App.js
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/item/:id" component={PostDetail} />
      </Switch>
    </Router>
  );
}

export default App;
