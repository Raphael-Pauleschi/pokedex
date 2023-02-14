import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from 'react'
import Navbar from '../components/Navbar'
import PokeCard from '../components/PokeCard'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Container maxWidth='false'>
                <Grid container>
                    <Grid item xs={3}>
                        <PokeCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokeCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokeCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokeCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokeCard />
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}