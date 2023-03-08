import React, { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Itemdisplay from '../ItemDisplay';
import TeraTypeDisplay from '../TeraTypeDisplay';
import { LocalStorageContext } from '../../LocalStorage/LocalStorageContext';

const Select = ({ dataList, data, referenceComplete, onSelect }) => {
    const [selected, setSelected] = useState('');
    const {team} = useContext(LocalStorageContext);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelected(selectedValue);
       onSelect( selectedValue);
    }

    const formatString = (textReceived) => {
        textReceived = textReceived.charAt(0)
            .toUpperCase()
            + textReceived.slice(1);
        textReceived = textReceived.replace(/-/g, " ");
        return textReceived.replace("held", " ");
    }

    useEffect(()=>{
    const storedSelected = team.find((pokemon)=> setSelected(pokemon[data]));
    
    if (storedSelected){
        setSelected(storedSelected[data]);
       
    }},[data,team])

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
                id="outlined-select-currency-native"
                select
                label={data}
                value={selected}
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

            {data === 'item' && <Itemdisplay selected={selected} />}
            {data === 'tera-type' && <TeraTypeDisplay selected={selected} />}
        </Box>

    )
}

export default Select;