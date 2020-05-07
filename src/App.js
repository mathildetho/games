import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import GameList from './components/GameList';
import GameDetail from './components/GameDetail';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route path="/Games/:id" component={GameDetail} />
      </Switch>
    </>
  );
}

export default App;
