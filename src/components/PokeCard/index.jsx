import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';
import Select from '../Select';

export default function PokeCard({ pokemon, typeList, itemsList }) {
  const typeHandler = () => {
    var typeText1 = "/types/" + pokemon.types[0].type.name + ".png";

    if (pokemon.types[1]) {
      var typeText2 = "/types/" + pokemon.types[1].type.name + ".png";
      return (<>
        <img style={{ marginLeft: '40px' }} src={typeText1} alt={pokemon.types[0].type.name} width="20%" />
        <img src={typeText2} alt={pokemon.types[1].type.name} width="20%" />

      </>)
    }
    return (<img style={{ marginLeft: '80px' }} src={typeText1} alt={pokemon.types[0].type.name} width="20%" />)
  }
  console.log(pokemon);
  /*
    const ablityHandler = () => {
      if(pokemon.abilities[0].name === pokemon.abilities[1].name)
      return (<Select dataList={pokemon.abilities[0]} data="ability" />)
      else
      return (<Select dataList={pokemon.abilities} data="ability" />)
    }
  */
  return (
    <Card sx={{ maxWidth: 545  }} style={{marginLeft: "60px", marginTop:"20px"}}>
      <Box sx={{ backgroundColor: "pink" }}
        display="flex"
        justifyContent="space-between"
        flexDirection='row'
        alignItens="center">
        <CardMedia
          sx={{ backgroundColor: '#F0DADA',  borderRadius: "50%" }}
          component="img"
          height="200"
          image={pokemon.sprites.front_default}
          style={{ width: '50%', height: 'auto', marginTop: "20px",  marginLeft: "20px"}}
          alt={pokemon.name}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "20px"}}>
          <Select dataList={pokemon.abilities} data="ability" referenceComplete='false'/>
          <Select dataList={typeList} data="tera-type" referenceComplete='true'/>
          <Select dataList={itemsList} data="item" referenceComplete='true'/>
        </Box>
      </Box>


      <CardContent sx={{ backgroundColor: "pink" }}>
        {typeHandler()}
        <Box display="flex" justifyContent="space-between" alignItens="center">
          <Select dataList={pokemon.moves} data="move" referenceComplete='false' />
          <Select dataList={pokemon.moves} data="move" referenceComplete='false'/>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItens="center">
          <Select dataList={pokemon.moves} data="move" referenceComplete='false'/>
          <Select dataList={pokemon.moves} data="move" referenceComplete='false'/>
        </Box>
      </CardContent>
    </Card>
  );
}
