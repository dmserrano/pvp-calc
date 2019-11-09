import { get } from "./fetch";
import { ALL_POKEMON, ALL_RANKINGS } from "@/constants/storage";
import { getStorageValue, setStorageValue, storageAvailable } from "@/services/storage";

export const getAllPokemon = async () => {
    if (storageAvailable() && getStorageValue(ALL_POKEMON)) {
        return getStorageValue(ALL_POKEMON);
    }

    const response = await get("/all-pokemon");
    if (response.error) return [];

    setStorageValue(ALL_POKEMON, response);
    return response;
};

export const getEvolutionChain = async (pokedexNumber) => {
    const response = await get(`/evolution-chain/${pokedexNumber}`);
    return response.error ? [] : response;
};

export const getIvSpreads = async (name, evolutionList, ivs, level) => {
    const pokemonList = [ name, ...evolutionList ].join(",");
    const queryString = `?ivs=${ivs}&level=${level}&pokemon=${pokemonList}`;
    const response = await get(`/iv-spread${queryString}`);
    return response.error ? null : response;
};

export const getRankings = async () => {
    if (storageAvailable() && getStorageValue(ALL_RANKINGS)) {
        return getStorageValue(ALL_RANKINGS);
    }

    const response = await get("/rankings");
    if (response.error) return [];

    setStorageValue(ALL_RANKINGS, response);
    return response;
};