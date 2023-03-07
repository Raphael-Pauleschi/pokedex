import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Itemdisplay = ({selected}) => {
    const [itemData, setItemData] = useState(null);

    useEffect(() =>{
        if (selected){
            axios.get(`https://pokeapi.co/api/v2/item/${selected}`).then(response => {
                setItemData(response.data);
            })
            .catch(error => console.log(error));
        } else {
            setItemData(null);
        }
    }, [selected]);

    if (itemData){
        return (
            <p> 
                <img  style={{marginRight: "200px"}} src={itemData.sprites.default} alt={itemData.name}/>
            </p>
       
        )
    }else{
        return(
            <p> 
                <img  style={{ marginRight: "200px"}} src="placeholder.png" alt="no item"  width="30" height="30"/>
            </p>
       
        )
    }
}

export default Itemdisplay;