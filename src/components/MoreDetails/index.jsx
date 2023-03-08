import React, {useContext, useState } from 'react';
import { Box, Grid,Button, CardContent, CardMedia, Card, Divider, TextField } from '@mui/material';
import Select from '../Select';
import TypeToolTip from '../TypeToolTip';
import { LocalStorageContext } from '../../LocalStorage/LocalStorageContext';
import ArchiveIcon from '@mui/icons-material/Archive';

export default function MoreDetails({ index, pokemon, typeList, itemsList }) {
  const [Iv, setIv] = useState([31, 31, 31, 31, 31, 31]);
  const [Ev, setEv] = useState([0, 0, 0, 0, 0, 0]);
  const statname = ["HP ", "Atk", "Def", "SpA", "SpD", "Spe"];
 /* const limitEv = 508;
  const remainEv = 508;*/

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
    const pokemonData = { id: index, name: pokemonName, ability, "tera-type":type, item, moveset };
    updatePokemon(pokemonData);
  }


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

  return (
    <div>
      <Card
        sx={{ maxWidth: 1000 }}
        style={{ marginLeft: "150px", marginTop: "20px" }}
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
            style={{ width: '300px', height: 'auto', marginTop: "20px", marginLeft: "20px" }}
            alt={pokemon.name}
          />
          <Box display='flex' flexDirection='column' alignItems='center' marginTop="60px">
            <Select dataList={pokemon.abilities} data="ability" referenceComplete={false} onSelect={setAbility} />
            <Select dataList={typeList} data="tera-type" referenceComplete={true} onSelect={setType} />
            <Select dataList={itemsList} data="item" referenceComplete={true} onSelect={setItem}/>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center' marginTop="20px">
            <Select dataList={pokemon.moves} data="move" referenceComplete={false} onSelect={setMove1}/>
            <Select dataList={pokemon.moves} data="move" referenceComplete={false} onSelect={setMove2}/>
            <Select dataList={pokemon.moves} data="move" referenceComplete={false} onSelect={setMove3}/>
            <Select dataList={pokemon.moves} data="move" referenceComplete={false} onSelect={setMove4}/>
          </Box>
        </Box>


        <CardContent sx={{ backgroundColor: "pink" }}>

          {pokemon.types[1] ? <TypeToolTip type1={pokemon.types[0].type.name} type2={pokemon.types[1].type.name} /> :
            <TypeToolTip type1={pokemon.types[0].type.name} />}


          <Divider />
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
           <Button variant="outlined" onClick={handleUpdatetoTeam} 
        color="secondary"
        startIcon={<ArchiveIcon fontSize="inherit"/>}>
          Save data
        </Button>
        </CardContent>
      </Card>
    </div>
  );
}

