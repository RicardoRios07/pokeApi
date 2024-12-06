import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Pokémon API</h1>
        <Routes>
          <Route path="/" element={<PokemonList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
