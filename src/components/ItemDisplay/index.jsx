import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Itemdisplay = ({ selected }) => {
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        if (selected) {
            axios.get(selected).then(response => {
                setItemData(response.data);
            })
                .catch(error => console.log(error));
        } else {
            setItemData(null);
        }
    }, [selected]);

    return (
        <p>
          <img
            style={{ marginRight: "200px" }}
            src={itemData?.sprites?.default ?? "placeholder.png"}
            alt={itemData?.name ?? "no item"}
            width="30"
            height="30"
          />
        </p>
      );
      
}

export default Itemdisplay;