import React, { useState, useEffect } from 'react';
import pokeAPI from '../api/pokeAPI';
import Pokemon from './Pokemon';
import { Grid } from '@mui/material';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const data = await pokeAPI.getPokemons();
            setPokemons(data);
        };

        fetchPokemons();
    }, []);

    return (
        <Grid container spacing={3} padding={5}>
            {pokemons.map(pokemon => (
                <Grid item key={pokemon.name} xs={12} sm={6} md={4} lg={3}>
                    <Pokemon pokemonURL={pokemon.url} />
                </Grid>
            ))}
        </Grid>
    );
};

export default PokemonList;
