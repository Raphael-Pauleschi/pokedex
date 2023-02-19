import { Container } from "@mui/system";
import React from 'react';
import Navbar from '../components/Navbar';
import PokemonInfo from "../components/PokeInfo";
import getType from "../script/getType";
import getItems from "../script/getItems";

export const Home = () => {
    const typeList = getType();
    const itemsList = getItems(); 

    console.log("OPA:",itemsList);

    return (
       
        <div>
            <Navbar />
            <Container maxWidth='false'>
                <PokemonInfo typeList={typeList} itemsList={itemsList}/>
                
            </Container>
        </div>
    )
}