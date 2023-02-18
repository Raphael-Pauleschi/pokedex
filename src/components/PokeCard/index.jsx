import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import SelectTeraType from '../Select/SelectTeraType';
import Select from '../Select';

export default function PokeCard({ pokemon }) {
  const typeHandler = () => {
    var typeText1 = "/types/" + pokemon.types[0].type.name + ".png";

    if (pokemon.types[1]) {
      var typeText2 = "/types/" + pokemon.types[1].type.name + ".png";
      return (<>
          <img src={typeText1} alt={pokemon.types[0].type.name} width="20%" />
          <img src={typeText2} alt={pokemon.types[1].type.name} width="20%" />

      </>)
    }
    return (<img src={typeText1} alt={pokemon.types[0].type.name} width="20%" />)
  }
/*
  const ablityHandler = () => {
    if(pokemon.abilities[0].name === pokemon.abilities[1].name)
    return (<Select dataList={pokemon.abilities[0]} data="ability" />)
    else
    return (<Select dataList={pokemon.abilities} data="ability" />)
  }
*/
  return (
    <Card sx={{ maxWidth: 545 }}>
      <Box sx={{ backgroundColor: "pink" }} display="flex" justifyContent="space-between" alignItens="center">
        <CardMedia
          sx={{ backgroundColor: "gray" }}
          component="img"
          height="200"
          image={pokemon.sprites.front_default}
          style={{ width: '50%', height: 'auto' }}
          alt={pokemon.name}
        />
       <Select dataList={pokemon.abilities} data="ability" />
      </Box>


      <CardContent sx={{ backgroundColor: "pink" }}>
          {typeHandler()}
    <SelectTeraType/>
        <Box display="flex" justifyContent="space-between" alignItens="center">
          <Select dataList={pokemon.moves} data="move"/>
          <Select dataList={pokemon.moves} data="move"/>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItens="center">
        <Select dataList={pokemon.moves} data="move"/>
        <Select dataList={pokemon.moves} data="move"/>
        </Box>
      </CardContent>
    </Card>
  );
}
