import { useState, useEffect } from 'react';
import axios from 'axios';

const getType = () =>{
    const [typeList, setTypeList] = useState([]);

    useEffect(() => {
        const fetchtypeList = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/type?limit=17');
            const data = response.data.results;
            setTypeList(data);
        };
        fetchtypeList();
        
    }, []);
    return typeList;
}

export default getType;