import React, { useState } from 'react';
import axios from 'axios';

const PokemonInfo = ({ name = 'Unknown', types = [], abilities = [], moves = [] }) => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePokemonNameChange = (event) => {
    setPokemonName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setPokemonInfo(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={pokemonName} onChange={handlePokemonNameChange} />
        <button type="submit">Submit</button>
      </form>

      {isLoading && <div>Loading...</div>}
      {pokemonInfo && (
        <div>
          <h2>{pokemonInfo.name}</h2>
          <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
          <p>Weight: {pokemonInfo.weight} kg</p>
          <p>Height: {pokemonInfo.height} m</p>
          <p>Abilities:</p>
          <ul>
            {pokemonInfo.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
          <p>Moves:</p>
          <ul>
            {pokemonInfo.moves.map((move) => (
              <li key={move.move.name}>{move.move.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokemonInfo;
