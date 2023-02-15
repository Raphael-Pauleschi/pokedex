import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SelectMoves({moves}) {

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Move"
          defaultValue=" "
          SelectProps={{
            native: true,
          }}
        >
          {moves.map((option) => (
            <option key={option.move.name} value={option.move.name}>
              {option.move.name}
            </option>
          ))}
        </TextField>
      </div>
      
    </Box>
  );
}
