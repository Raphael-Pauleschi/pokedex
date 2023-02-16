import { Grid} from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PokeCard from '../components/PokeCard';
import Skeletons from '../components/Skeletons';
import SelectPokemon from "../components/Select/SelectPokemon";

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for (var i = 906; i < 910; i++) {
            endpoints.push('https://pokeapi.co/api/v2/pokemon/' + i + '/')
        }

        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemons(res));
        return response;
    }

    const pokeFilter = (name) => {
        var filteredPokemons = []
        if(name === "")
            getPokemons()
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons)
    };
    return (
       
        <div>
            <Navbar pokeFilter ={pokeFilter} />
            <SelectPokemon/>
            <Container maxWidth='false'>
                <Grid container spacing={1}>
                    {pokemons.length === 0 ? <Skeletons/>: 
                    pokemons.map((pokemon, key) => (
                        <Grid item xs={12} md={6}key={key}>
                            <PokeCard pokemon={pokemon} />
                        </Grid>))}
                </Grid>
            </Container>
        </div>
    )
}