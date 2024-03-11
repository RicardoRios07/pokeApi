import React, { useState, useEffect } from 'react';
import pokeAPI from '../api/pokeAPI';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const Pokemon = ({ pokemonURL }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const data = await pokeAPI.getPokemonDetails(pokemonURL);
            setPokemonDetails(data);
        };

        fetchPokemonDetails();
    }, [pokemonURL]);

    if (!pokemonDetails) return <div>Loading...</div>;

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={pokemonDetails.sprites.front_default}
                alt={pokemonDetails.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}
                </Typography>
                {/* Aquí puedes añadir más detalles si lo deseas */}
            </CardContent>
        </Card>
    );
};

export default Pokemon;
