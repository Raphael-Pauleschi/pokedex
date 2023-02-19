import React, {useState} from 'react';
import SelectPokemon from '../Select/SelectPokemon';
import PokeCard from '../PokeCard';
import Navbar from '../Navbar';

const PokeContainer = () =>{
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const handleSelect = (pokemon) =>{
        setSelectedPokemon(pokemon);
    };

    return(
        <div>
            <Navbar />
            <SelectPokemon onSelect={handleSelect}/>
            {selectedPokemon && <PokeCard pokemon={selectedPokemon}/>}
        </div>
    );
};

export default PokeContainer;