import React, { useState } from 'react';
import axios from 'axios';
import PokeCard from '../PokeCard';
import { TextField } from '@mui/material';

const PokemonInfo = ({ typeList, itemsList}) => {
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
      <TextField id="outlined-basic" 
      label="Pokemon" 
      variant="outlined" 
      value={pokemonName} 
      onChange={handlePokemonNameChange}
      style={{marginLeft: "60px"}}
      />
       
      </form>

      {isLoading && <div>Loading...</div>}
      {pokemonInfo &&  <PokeCard pokemon={pokemonInfo} typeList={typeList} itemsList={itemsList} />
      }
    </div>
  );
};

export default PokemonInfo;
