import React from 'react'
import Main from './components/Main'
import About from './components/About'
import Changetodo from './components/Changetodo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/about' component={About} />
        <Route path='/change' component={Changetodo} />
      </Switch>
    </Router>
  );
}

export default App;
