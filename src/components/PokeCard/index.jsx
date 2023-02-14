import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

export default function PokeCard({name,image, types}) {
 const typeHandler = () => {
    if(types[1]){
      return types[0].type.name+"/"+types[1].type.name;
    }
    return types[0].type.name;
 }
 
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
        sx={{backgroundColor:"gray"}}
          component="img"
          height="200"
          image={image}
          alt= {name}
        />
        <CardContent sx={{backgroundColor:"pink"}}>
          <Box display="flex" justifyContent="space-between" alignItens="center">
          <Typography gutterBottom variant="h6" component="div" >
            {name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div" >
            {typeHandler()}
          </Typography>
          </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
