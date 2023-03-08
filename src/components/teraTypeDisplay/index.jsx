import React,{useState,useEffect} from 'react';
import axios from 'axios';
import MonoTypeEffect from '../typeEffect/MonoTypeEffect';
import { Tooltip } from '@mui/material';

const TeraTypeDisplay = ({selected}) =>{
    const [teraData, setTeraData] = useState(null);

    useEffect(() =>{
        if (selected){
            axios.get(`https://pokeapi.co/api/v2/type/${selected}`).then(response => {
                setTeraData(response.data.name);
            })
            .catch(error => console.log(error));
        } else {
            setTeraData(null);
        }
    }, [selected]);

   var typeText = "/types/" + teraData + ".png";
   return(
    <div>
     {teraData ?
    <Tooltip 
        disableFocusListener
         disableTouchListener 
        title={<MonoTypeEffect type1={teraData} />}>
          <img src={typeText} alt={teraData} width="100px" />
        </Tooltip> : <img src="/types/none.png" alt="No type" width="100px" />}
    </div>
   

   )

}

export default TeraTypeDisplay;