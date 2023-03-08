
import { Grid } from "@mui/material";
import React from 'react';
import Navbar from '../components/Navbar';
import PokeInfo from "../components/PokeInfo";
import getType from "../script/getType";
import getItems from "../script/getItems";

export const Home = () => {
  const typeList = getType();
  const itemsList = getItems();


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

  //Test Retur
  /*
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
  */

  return (
    <div>
      <Navbar />
      <div className="team">
       
          {[0, 1, 2, 3, 4, 5].map((index) => {
            return (
              <Grid item xs={6} sm={6} md={6} key={index}>
              <div key={index}>
                <PokeInfo index={index} key={index} typeList={typeList} itemsList={itemsList} />
              </div>
              </Grid>
            );
          })}
       
      </div>
    </div >
  );
}