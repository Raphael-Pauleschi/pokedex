import { useState, useEffect } from 'react';
import axios from 'axios';

const getItems = async () =>{
    const urls = ['https://pokeapi.co/api/v2/item-category/4/',
    'https://pokeapi.co/api/v2/item-category/46/',
    'https://pokeapi.co/api/v2/item-category/44/',
    'https://pokeapi.co/api/v2/item-category/19/',
    'https://pokeapi.co/api/v2/item-category/15/]']

    const requests =urls.map(url => axios.get(url));
    Promise.all(requests)
    .then(responses =>{
            const data = responses.map(response.items);
            console.log(data);
        })
        .catch(error => console.log(error))

   //  return data;   

}

export default getItems;