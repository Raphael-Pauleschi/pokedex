import React, { useEffect, useState } from 'react';
import { LocalStorageContext } from '../LocalStorageContext';

export default function LocalStorageProvider({ children }) {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const storedTeam = JSON.parse(localStorage.getItem('pokemonTeam'));
    if (storedTeam) {
      setTeam(storedTeam);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pokemonTeam', JSON.stringify(team));
  }, [team]);

  const addPokemon = (pokemon) => {
    setTeam([...team, pokemon]);
    
    console.log(pokemon);
  };

  const removePokemon = (pokemon) => {
    setTeam(team.filter((p) => p.id !== pokemon.id));
  };

  const updatePokemon = (updatedPokemon) => {
    const updatedTeam = team.map((p) =>
      p.id === updatedPokemon.id ? updatedPokemon : p
    );
    setTeam(updatedTeam);
  };
  console.log(team);
  return (
    <LocalStorageContext.Provider
      value={{ team, addPokemon, removePokemon, updatePokemon }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
}
