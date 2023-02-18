import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const SelectTeraType = () => {
    const [typeList, setTypeList] = useState([]);
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        const fetchtypeList = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/type?limit=17');
            const data = response.data.results;
            setTypeList(data);
        };
        fetchtypeList();
        
    }, []);

    const handleTeraChange = (event) =>{
        setSelectedType(event.target.value);
    };

    return (
        <div>
            <select value ={selectedType} onChange={handleTeraChange}>
                <option value="">Select a type</option>
                {typeList.map((type,index) =>(
                    <option key={index} value={type.url}>
                        {type.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectTeraType;