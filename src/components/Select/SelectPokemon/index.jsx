import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SelectPokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState('');

    useEffect(() => {
        const fetchPokemonList = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=103&offset=905');
            const data = response.data.results;
            setPokemonList(data);
        };
        fetchPokemonList();
    }, []);

    const handlePokemonChange = (event) => {
        setSelectedPokemon(event.target.value);
    };

    return (
        <select value={selectedPokemon} onChange={handlePokemonChange}>
            <option value="">Select a Pokemon</option>
            {pokemonList.map((pokemon, index) => (
                <option key={index} value={pokemon.url}>
                    {pokemon.name}
                </option>
            ))}
        </select>
    );
};


export default SelectPokemon;