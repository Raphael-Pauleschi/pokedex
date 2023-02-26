import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Grid } from '@mui/material';
import Select from '../Select';
import { TextField } from '@mui/material';
import TypeEffect from '../typeEffect';

export default function MoreDetails({ pokemon, typeList, itemsList }) {
  const [Iv, setIv] = useState([31, 31, 31, 31, 31, 31]);
  const [Ev, setEv] = useState([0, 0, 0, 0, 0, 0]);
  const statname = ["HP ", "Atk", "Def", "SpA", "SpD", "Spe"];
  const limitEv = 508;
  const remainEv = 508;

  const handleStatChange = (event, typeValue, id) => {
    const value = parseInt(event.target.value)
      || (typeValue === "IV" ? 31 : 0)
      || (typeValue === "EV" ? 252 : 0);
    if (typeValue === "IV") {
      console.log("A", Iv);
      setIv(prevIv => {
        const newIv = [...prevIv];
        newIv[id] = value;
        return newIv
      });
    }
    if (typeValue === "EV") {
      console.log(Ev.reduce((accumulator, currentValue) => accumulator + currentValue));

      setEv(prevEv => {
        const newEv = [...prevEv];
        newEv[id] = value;
        return newEv

      });

    }
  };

  const CalculateStat = (id, baseStat) => {
    //For the time being, the level is 100
    var trueStat = (2 * baseStat + Iv[id] + (Ev[id] / 4))
    //The Hp stat is calculated different
    if (id === 0) {
      //The pokemon Shedinja will always have 1 HP
      if (pokemon === "shedinja")
        trueStat = 1;
      else
        trueStat += 110;

    } else {
      trueStat += 5;
      //todo - Natures
    }

    return trueStat;
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
    <div>
      <Card
        sx={{ maxWidth: 1000 }}
        style={{ marginLeft: "60px", marginTop: "20px" }}
      >
        <Box sx={{ backgroundColor: "pink" }}
          display="flex"
          justifyContent="space-between"
          flexDirection='row'
          alignItems="center">
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
          <Grid container alignItems="center" spacing={2}>
            {pokemon.stats.map((stat, index) => (

              <Grid item xs={8} key={index}> {statname[index]}&nbsp; {stat.base_stat} &nbsp;
                <TextField
                  id="outlined-number"
                  label="EV"
                  type="number"
                  size="small"
                  defaultValue={0}
                  inputProps={{ max: 252, min: 0 }}
                  onChange={(event) => handleStatChange(event, "EV", index)}
                  sx={{ width: '70px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> &nbsp;
                <TextField
                  id="outlined-number"
                  label="IV"
                  type="number"
                  size="small"
                  defaultValue={31}
                  sx={{ width: '70px' }}
                  inputProps={{ max: 31, min: 0 }}
                  onChange={(event) => handleStatChange(event, "IV", index)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> &nbsp;
                {CalculateStat(index, stat.base_stat)}
              </Grid>


            ))}
          </Grid>
        </CardContent>
      </Card>

      {pokemon.types[1] ?
        <TypeEffect type1={pokemon.types[0].type.name} type2={pokemon.types[1].type.name} />
        : <TypeEffect type1={pokemon.types[0].type.name} />};
    </div>
  );
}
