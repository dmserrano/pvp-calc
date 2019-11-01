import { get } from "./fetch";

export const getAllPokemon = async () => {
    const response = await get("/all-pokemon");
    return response;
};

export const getEvolutionChain = async (pokedexNumber) => {
    const response = await get(`/evolution-chain/${pokedexNumber}`);
    return response;
};

export const getIvSpreads = async (name, evolutionList, ivs, level) => {
    const pokemonList = [ name, ...evolutionList ].join(",");
    const queryString = `?ivs=${ivs}&level=${level}&pokemon=${pokemonList}`;
    const response = await get(`/iv-spread${queryString}`);
    return response;
};

export const getRankings = async () => {
    const response = await get("/rankings");
    return response;
};