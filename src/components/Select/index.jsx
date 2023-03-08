import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalStorageContext } from '../../LocalStorage/LocalStorageContext';
import Itemdisplay from '../ItemDisplay';
import TeraTypeDisplay from '../TeraTypeDisplay';

const Select = ({ dataList, data, referenceComplete, onSelect, index }) => {
  const { team } = useContext(LocalStorageContext);
  const [storedSelect, setStoredSelect] = useState(team[index][data]);

  useEffect(() => {
    setStoredSelect(team[index][data]);
  }, [index, data, team]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setStoredSelect(selectedValue);
    onSelect(selectedValue);
  };

  const formatString = (textReceived) => {
    textReceived = textReceived.charAt(0).toUpperCase() + textReceived.slice(1);
    textReceived = textReceived.replace(/-/g, ' ');
    return textReceived.replace('held', ' ');
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      utocomplete="off"
    >
      <TextField
        id={`outlined-select-currency-native-${data}`}
        select
        label={data}
        value={storedSelect}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
      >
        <option value=""></option>
        {dataList.map((index) => (
          <option
            key={index}
            value={referenceComplete ? index.name : index[data].name}
          >
            {referenceComplete
              ? formatString(index.name)
              : formatString(index[data].name)}
          </option>
        ))}
      </TextField>
      {data === 'item' && <Itemdisplay selected={storedSelect} />}
            {data === 'tera-type' && <TeraTypeDisplay selected={storedSelect} />}
    </Box>
  );
};

export default Select;
