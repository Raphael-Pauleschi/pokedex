import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import React from 'react';
import Navbar from '../components/Navbar';
import PokemonInfo from "../components/PokeInfo";
import getType from "../script/getType";
import getItems from "../script/getItems";

export const Home = () => {
    const typeList = getType();
    const itemsList = getItems();
    const pokemonIds = [1, 2];

/* Normal Return
    return (
        <div>
            <Navbar />
            <br></br>
            <Grid container spacing={3}>
                {pokemonIds.map(id => (
                    <Grid item xs={6} sm={3} md={6} key={id}>
                        <PokemonInfo key={id} typeList={typeList} itemsList={itemsList} 
                        />
                    </Grid>
                ))}
            </Grid>

        </div>
    )*/

    //Test Return
    return (
        <div>
            <Navbar />
            <br></br>
            <Grid container spacing={3}>
                {pokemonIds.map(id => (
                    <Grid item xs={12} sm={12} md={12} key={id}>
                        <PokemonInfo key={id} typeList={typeList} itemsList={itemsList} 
                        />
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}