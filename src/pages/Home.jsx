import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import React, {useContext} from 'react';
import Navbar from '../components/Navbar';
import PokeInfo from "../components/PokeInfo";
import getType from "../script/getType";
import getItems from "../script/getItems";
import { LocalStorageContext } from "../LocalStorage/LocalStorageContext";

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
    const { team } = React.useContext(LocalStorageContext);

  return (
    <div>
      <Navbar/>
      <div className="team">
        {[0, 1, 2, 3, 4, 5].map((index) => {
          return (
            <div key={index}>
              <PokeInfo index={index} key={index} typeList={typeList} itemsList={itemsList} />
            </div>
          );
        })}
      </div>
    </div>
    );
}