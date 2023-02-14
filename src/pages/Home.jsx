import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PokeCard from '../components/PokeCard';

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons();
    });
    const getPokemons = () => {
        var endpoints = [];
        for(var i=906;i<1009; i++){
            endpoints.push('https://pokeapi.co/api/v2/pokemon/'+i+'/')
        }

        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => setPokemons(res));
        return response;
        /*
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=103&offset=905")
            .then((res) => setPokemons(res.data.results))
            .catch((err) => console.log(err));
           */ 
    }

    return (
        <div>
            <Navbar />
            <Container maxWidth='false'>
                <Grid container spacing={2}>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xs={2} key={key}>
                            <PokeCard name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
                        </Grid>))}
                </Grid>
            </Container>

        </div>
    )
}