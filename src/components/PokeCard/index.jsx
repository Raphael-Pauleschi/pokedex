import React, { useContext, useState } from "react";
import { Box, Card, CardContent, CardMedia, Button } from '@mui/material';
import Select from '../Select';
import TypeToolTip from '../TypeToolTip';
import { LocalStorageContext } from '../../LocalStorage/LocalStorageContext';
import ArchiveIcon from '@mui/icons-material/Archive';


export default function PokeCard({ index, pokemon, typeList, itemsList }) {
  const { updatePokemon } = useContext(LocalStorageContext);
  const [ability, setAbility] = useState("");
  const [type, setType] = useState("");
  const [item, setItem] = useState("");
  const [move1, setMove1] = useState("");
  const [move2, setMove2] = useState("");
  const [move3, setMove3] = useState("");
  const [move4, setMove4] = useState("");

  const handleUpdatetoTeam = () => {
    const moveset = { move1, move2, move3, move4 };
    const pokemonName = pokemon.name;
    const pokemonData = { id: index, name: pokemonName, ability, type, item, moveset };
    updatePokemon(pokemonData);
  }

  return (
    <Card
      sx={{ maxWidth: 545 }}
      style={{ marginLeft: "60px", marginTop: "20px" }}
    >
      <Box sx={{ backgroundColor: "pink" }}
        display="flex"
        justifyContent="space-between"
        flexDirection='row'
        alignItens="center">
        <CardMedia
          sx={{ backgroundColor: '#F0DADA', borderRadius: "50%" }}
          component="img"
          height="200"
          image={pokemon.sprites.front_default}
          style={{ width: '50%', height: 'auto', marginTop: "20px", marginLeft: "20px" }}
          alt={pokemon.name}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "20px" }}>
          <Select dataList={pokemon.abilities} data="ability" referenceComplete={false} onSelect={setAbility} />
          <Select dataList={typeList} data="tera-type" referenceComplete={true} onSelect={setType} />
          <Select dataList={itemsList} data="item" referenceComplete={true} onSelect={setItem} />
        </Box>
      </Box>


      <CardContent sx={{ backgroundColor: "pink" }}>
        {pokemon.types[1] ? <TypeToolTip type1={pokemon.types[0].type.name} type2={pokemon.types[1].type.name} /> :
          <TypeToolTip type1={pokemon.types[0].type.name} />}
        <Box display="flex" justifyContent="space-between" alignItens="center">
          <Select dataList={pokemon.moves} data="move" referenceComplete={false} onSelect={setMove1} />
          <Select dataList={pokemon.moves} data="move" referenceComplete={false} onSelect={setMove2} />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItens="center">
          <Select dataList={pokemon.moves} data="move" referenceComplete={false} onSelect={setMove3} />
          <Select dataList={pokemon.moves} data="move" referenceComplete={false} onSelect={setMove4} />
        </Box>


        <Button variant="outlined" onClick={handleUpdatetoTeam} 
        color="secondary"
        startIcon={<ArchiveIcon fontSize="inherit"/>}>
          Save data
        </Button>
      </CardContent>
    </Card>
  );
}
