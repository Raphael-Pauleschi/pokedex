import { Container } from "@mui/system";
import React from 'react';
import Navbar from '../components/Navbar';
import PokemonInfo from "../components/PokeInfo";

export const Home = () => {
    return (
       
        <div>
            <Navbar />
            <Container maxWidth='false'>
                <PokemonInfo/>
                <PokemonInfo/>
                <PokemonInfo/>
                <PokemonInfo/>
                <PokemonInfo/>
                <PokemonInfo/>
                
            </Container>
        </div>
    )
}