import * as React from 'react';
import { useContext } from "react";
import { Box, Card, CardContent, CardMedia } from '@mui/material';
import Select from '../Select';
import TypeToolTip from '../TypeToolTip';
import { LocalStorageContext } from '../../LocalStorage/LocalStorageContext';


export default function PokeCard({ pokemon, typeList, itemsList }) {
  const { addPokemon } = useContext(LocalStorageContext);
  const handleAddtoTeam = () => {
    addPokemon(pokemon);
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
          <Select dataList={pokemon.abilities} data="ability" referenceComplete='false' />
          <Select dataList={typeList} data="tera-type" referenceComplete='true' />
          <Select dataList={itemsList} data="item" referenceComplete='true' />
        </Box>
      </Box>


      <CardContent sx={{ backgroundColor: "pink" }}>
        {pokemon.types[1] ? <TypeToolTip type1={pokemon.types[0].type.name} type2={pokemon.types[1].type.name} /> :
          <TypeToolTip type1={pokemon.types[0].type.name} />}
        <Box display="flex" justifyContent="space-between" alignItens="center">
          <Select dataList={pokemon.moves} data="move" referenceComplete='false' />
          <Select dataList={pokemon.moves} data="move" referenceComplete='false' />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItens="center">
          <Select dataList={pokemon.moves} data="move" referenceComplete='false' />
          <Select dataList={pokemon.moves} data="move" referenceComplete='false' />
        </Box>
        <button onClick={handleAddtoTeam}>Add to team</button>
      </CardContent>
    </Card>
  );
}
