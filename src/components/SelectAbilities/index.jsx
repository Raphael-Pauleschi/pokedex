import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SelectAbilities({abilities}) {

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
          label="Ability"
          defaultValue=" "
          SelectProps={{
            native: true,
          }}
        >
          {abilities.map((option) => (
            <option key={option.ability.name} value={option.ability.name}>
              {option.ability.name}
            </option>
          ))}
        </TextField>
      </div>
      
    </Box>
  );
}
