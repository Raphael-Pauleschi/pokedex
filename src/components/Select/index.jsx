import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Select = ({dataList, data, referenceComplete }) => {
   const [selected, setSelected] = useState('');

   const handleChange = (event) =>{
    setSelected (event.target.value);
   }

   if(data==="item"){
    console.log("HEY",dataList);
   }
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
                        <option key={index} value={referenceComplete === 'true' ? index.url : index[data].url}>
                            {referenceComplete === 'true' ? index.name : index[data].name}
                            </option>
                            
                    ))}
                   
                </TextField>


        </Box>

    )
}

export default Select;