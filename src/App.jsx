import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/hompage/hompage.component';
import './App.styles.scss';

const hatsPage = () => (
  <div>
    <h1> HATS </h1>
  </div>
);

function App() {
  return (
    <div>
      {/* Switch only renders the first route that matches path */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={hatsPage} />
      </Switch>

      {/* https://stackoverflow.com/questions/45122800/react-router-switch-behavior */}
    </div>
  );
}

export default App;
