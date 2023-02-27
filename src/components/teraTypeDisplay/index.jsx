import React,{useState,useEffect} from 'react';
import axios from 'axios';
import TypeEffect from '../typeEffect';
import { Tooltip } from '@mui/material';

const TeraTypeDisplay = ({selected}) =>{
    const [teraData, setTeraData] = useState(null);

    useEffect(() =>{
        if (selected){
            axios.get(selected).then(response => {
                setTeraData(response.data.name);
            })
            .catch(error => console.log(error));
        } else {
            setTeraData(null);
        }
    }, [selected]);

    console.log(selected);
   var typeText = "/types/" + teraData + ".png";
   return(
    <p>
     {teraData ?
    <Tooltip 
        disableFocusListener
         disableTouchListener 
        title={<TypeEffect type1={teraData} />}>
          <img src={typeText} alt={teraData} width="10%" />
        </Tooltip> : null}
    </p>
   

   )

}

export default TeraTypeDisplay;