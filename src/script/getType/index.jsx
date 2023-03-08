import  { useState, useEffect } from 'react';
import axios from 'axios';

const GetType = () =>{
    const [typeList, setTypeList] = useState([]);

    useEffect(() => {
        const fetchtypeList = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/type?limit=18');
            const data = response.data.results;
            setTypeList(data);
        };
        fetchtypeList();
        
    }, []);
    return typeList;
}

export default GetType;