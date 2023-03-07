import './App.css';
import  LocalStorageProvider  from './LocalStorage/LocalStorageProvider';
import React from 'react'
import { Home } from './pages/Home';

function App() {
  
  return (
    <LocalStorageProvider>
      <Home />
    </LocalStorageProvider>);
}

export default App;
