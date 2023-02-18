import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Select = ({dataList, data }) => {
   const [selected, setSelected] = useState('');

   const handleChange = (event) =>{
    setSelected (event.target.value);
   }
    console.log(dataList.map((index)=> index));
    return (
        <Box 
        component="form"
        sx={{
            '& .MuiTextField-root': {m:1, width: '25ch'},
        }}
        noValidatea
        utoComplete="off"
        >
              
                <TextField
                id="outlined-select-currency-native"
                select
                label = {data}
                value = {selected}
                onChange = {handleChange}
                defaultValue=" "
                SelectProps={{
                    native:true,
                }}
                >
                    <option value = ""></option>
                    {dataList.map((index) => (
                        <option key={index} value={index[data].url}>
                            {index[data].name}
                            </option>
                            
                    ))}
                   
                </TextField>


        </Box>

    )
}

export default Select;