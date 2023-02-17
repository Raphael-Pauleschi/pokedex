import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import SelectMoves from '../Select/SelectMoves';
import SelectAbilities from '../Select/SelectAbilities';

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
        <SelectAbilities abilities={pokemon.abilities} />
      </Box>


      <CardContent sx={{ backgroundColor: "pink" }}>
          {typeHandler()}

        <Box display="flex" justifyContent="space-between" alignItens="center">
          <SelectMoves moves={pokemon.moves} />
          <SelectMoves moves={pokemon.moves} />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItens="center">
          <SelectMoves moves={pokemon.moves} />
          <SelectMoves moves={pokemon.moves} />
        </Box>
      </CardContent>
    </Card>
  );
}
