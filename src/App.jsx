import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Pokémon Api</h1>
        <Switch>
          <Route path="/" component={PokemonList} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
