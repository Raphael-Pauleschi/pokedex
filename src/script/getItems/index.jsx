import { useState, useEffect } from 'react';
import axios from 'axios';

const GetItems = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    const urls = ['https://pokeapi.co/api/v2/item-category/4',
      'https://pokeapi.co/api/v2/item-category/46',
      'https://pokeapi.co/api/v2/item-category/44',
      'https://pokeapi.co/api/v2/item-category/19',
      'https://pokeapi.co/api/v2/item-category/15',
      'https://pokeapi.co/api/v2/item-attribute/7',
      'https://pokeapi.co/api/v2/item-category/12/']

    const requests = urls.map(url => axios.get(url));
    Promise.all(requests)
      .then(responses => {
        const itemsArray = responses.flatMap(response => response.data.items);
        console.log(itemsArray);
        setItems(itemsArray);
      })
      .catch(error => console.log(error))
  }, []);

  return items;



}

export default GetItems;