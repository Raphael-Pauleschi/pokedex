import React, { useState } from 'react';
import axios from 'axios';
import PokeCard from '../PokeCard';

const PokemonInfo = ({ typeList}) => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePokemonNameChange = (event) => {
    setPokemonName(event.target.value);
    setPokemonInfo(null);
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
      {pokemonInfo &&  <PokeCard pokemon={pokemonInfo} typeList={typeList}/>
      }
    </div>
  );
};

export default PokemonInfo;
