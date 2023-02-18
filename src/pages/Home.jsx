import { Container } from "@mui/system";
import React from 'react';
import Navbar from '../components/Navbar';
import PokemonInfo from "../components/PokeInfo";
import getType from "../script/getType";

export const Home = () => {
    const typeList = getType();

    return (
       
        <div>
            <Navbar />
            <Container maxWidth='false'>
                <PokemonInfo typeList={typeList}/>
                
            </Container>
        </div>
    )
}