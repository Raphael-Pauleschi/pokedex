import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import SelectMoves from '../SelectMoves';
import SelectAbilities from '../SelectAbilities';

export default function PokeCard({ name, image, types, moves, abilities }) {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + "/" + types[1].type.name;
    }
    return types[0].type.name;
  }

  return (
    <Card sx={{ maxWidth: 545 }}>
      <CardMedia
        sx={{ backgroundColor: "gray" }}
        component="img"
        height="200"
        image={image}
        style={{ width: '50%', height: 'auto' }}
        alt={name}
      />
      <CardContent sx={{ backgroundColor: "pink" }}>
        <Box display="flex" justifyContent="space-between" alignItens="center">
          <Typography gutterBottom variant="h6" component="div" >
            {name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div" >
            {typeHandler()}
          </Typography>
        </Box>
        <SelectAbilities abilities={abilities} />
        <Box display="flex" justifyContent="space-between" alignItens="center">
          <SelectMoves moves={moves} />
          <SelectMoves moves={moves} />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItens="center">
          <SelectMoves moves={moves} />
          <SelectMoves moves={moves} />
        </Box>
      </CardContent>
    </Card>
  );
}
