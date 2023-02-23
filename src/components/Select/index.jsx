import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Itemdisplay from '../ItemDisplay';

const Select = ({ dataList, data, referenceComplete }) => {
    const [selected, setSelected] = useState('');

    const handleChange = (event) => {
        setSelected(event.target.value);
    }

    const formatString = (textReceived) => {
        textReceived = textReceived.charAt(0)
            .toUpperCase() 
            + textReceived.slice(1);
        textReceived = textReceived.replace(/-/g, " ");     
        return textReceived.replace("held", " ");
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidatea
            utoComplete="off"
        >

            <TextField
                id="outlined-select-currency-native"
                select
                label={data}
                value={selected}
                onChange={handleChange}
                defaultValue=" "
                SelectProps={{
                    native: true,
                }}
            >
                <option value=""></option>
                {dataList.map((index) => (
                    <option key={index} value={referenceComplete === 'true' ? index.url : index[data].url}>
                        {referenceComplete === 'true' ? formatString(index.name) : formatString(index[data].name)}
                    </option>

                ))}

            </TextField>

            {data === 'item' ? <Itemdisplay selected={selected} /> : null}
        </Box>

    )
}

export default Select;