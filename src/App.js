import './App.css';
import AppContext from "./AppContext";
import React from 'react'
import { Home } from './pages/Home';

function App() {
  
  return (
    <AppContext.Provider value={[state, setState]}>
      <Home />
    </AppContext.Provider>);
}

export default App;
