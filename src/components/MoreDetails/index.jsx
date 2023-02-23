import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Grid } from '@mui/material';
import Select from '../Select';
import { TextField } from '@mui/material';

export default function MoreDetails({ pokemon, typeList, itemsList }) {
  const [Iv, setIv] = useState([31, 31, 31, 31, 31, 31]);

  const [Ev, setEv] = useState([0, 0, 0, 0, 0, 0]);

  const handleStatChange = (event, typeValue, id) => {
    if (typeValue === "Iv")
      setIv[id](event.target.value); 
    if(typeValue === "Ev")
    setEv[id](event.target.value); 
  };

  const CalculateStat = (id, baseStat) =>{

    //The Hp stat is calculated different
    if(id===0){
      
    }else{
      
    }
  }

  const typeHandler = () => {
    var typeText1 = "/types/" + pokemon.types[0].type.name + ".png";

    if (pokemon.types[1]) {
      var typeText2 = "/types/" + pokemon.types[1].type.name + ".png";
      return (<>
        <img style={{ marginLeft: '40px' }} src={typeText1} alt={pokemon.types[0].type.name} width="10%" />
        <img src={typeText2} alt={pokemon.types[1].type.name} width="10%" />

      </>)
    }
    return (<img style={{ marginLeft: '80px' }} src={typeText1} alt={pokemon.types[0].type.name} width="10%" />)
  }

  return (
    <Card
      sx={{ maxWidth: 1000 }}
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
          style={{ width: '25%', height: 'auto', marginTop: "20px", marginLeft: "20px" }}
          alt={pokemon.name}
        />
        <Box display='flex' flexDirection='column' alignItems='center' marginTop="20px">
          <Select dataList={pokemon.abilities} data="ability" referenceComplete='false' />
          <Select dataList={typeList} data="tera-type" referenceComplete='true' />
          <Select dataList={itemsList} data="item" referenceComplete='true' />
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center' marginTop="20px">
          <Select dataList={pokemon.moves} data="move" referenceComplete='false' />
          <Select dataList={pokemon.moves} data="move" referenceComplete='false' />
          <Select dataList={pokemon.moves} data="move" referenceComplete='false' />
          <Select dataList={pokemon.moves} data="move" referenceComplete='false' />
        </Box>
      </Box>


      <CardContent sx={{ backgroundColor: "pink" }}>
        {typeHandler()}
        <h2>Stats:</h2>
        <Grid container align="center" spacing={2}>
          {pokemon.stats.map((stat) => (

            <Grid item xs={8} key={stat.stat.name}>{stat.stat.name} {stat.base_stat}
              <TextField
                id="outlined-number"
                label="EV"
                type="number"
                size="small"
                defaultValue={0}
                inputProps={{ max: 252, min: 0 }}
                sx={{ width: '70px' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-number"
                label="IV"
                type="number"
                size="small"
                defaultValue={31}
                sx={{ width: '70px' }}
                inputProps={{ max: 31, min: 0 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>


          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

