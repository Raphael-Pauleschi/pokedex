import React, { useState,useContext } from 'react';
import axios from 'axios';
import PokeCard from '../PokeCard';
import { TextField } from '@mui/material';
import MoreDetails from '../MoreDetails';
import { LocalStorageContext } from '../../LocalStorage/LocalStorageContext';

const PokeInfo = ({ index, typeList, itemsList }) => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { addPokemon, removePokemon } = useContext(LocalStorageContext);


  const handleAddtoTeam = () => {
    const moveset = { move1:null, move2:null, move3:null, move4:null };
    const pokemonData = {id:index, name: pokemonName, ability:null, type:null, item:null, moveset };
    console.log("Data :",pokemonData);
    addPokemon(pokemonData, index);
  }

  const handlePokemonNameChange = (event) => {
    setPokemonName(event.target.value);
    setPokemonInfo(null);
    removePokemon(index);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setPokemonInfo(response.data);
      handleAddtoTeam();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const [showMoreDetails, setShowMoreDetails] = useState(false);


  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <TextField id="outlined-basic"
          label="Pokemon"
          variant="outlined"
          value={pokemonName}
          onChange={handlePokemonNameChange}
          style={{ marginLeft: "60px" }}
        />

      </form>
      {isLoading && <div>Loading...</div>}
      {pokemonInfo && 
  <>
    <button onClick={() => setShowMoreDetails(!showMoreDetails)}>
      {showMoreDetails ? "Show less details" : "Show more details"}
    </button>

    {showMoreDetails ? (
      <MoreDetails pokemon={pokemonInfo} typeList={typeList} itemsList={itemsList} />
    ) : (
      <PokeCard index={index} pokemon={pokemonInfo} typeList={typeList} itemsList={itemsList} />
    )}
  </>
}

    </div>
  );

};

export default PokeInfo;
