import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';

const pokeAPI = {
    getPokemons: async () => {
        try {
            const response = await axios.get(`${baseURL}pokemon?limit=100`);
            return response.data.results;
        } catch (error) {
            console.error("Error obteniendo los pokemons", error);
        }
    },
    getPokemonDetails: async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Error obteniendo los detalles de los pokemones", error);
        }
    }
};

export default pokeAPI;
