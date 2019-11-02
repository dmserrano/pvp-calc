import { get } from "./fetch";
import { ALL_POKEMON, ALL_RANKINGS } from "@/constants/storage";
import { getStorageValue, setStorageValue, storageAvailable } from "@/services/storage";

export const getAllPokemon = async () => {
    const allPokemonStorage = getStorageValue(ALL_POKEMON);

    if (storageAvailable() && allPokemonStorage) {
        return JSON.parse(allPokemonStorage);
    }

    const response = await get("/all-pokemon");
    if (response.error) return [];

    setStorageValue(ALL_POKEMON, JSON.stringify(response));
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
    const allRankingsStorage = getStorageValue(ALL_RANKINGS);

    if (storageAvailable() && allRankingsStorage) {
        return JSON.parse(allRankingsStorage);
    }

    const response = await get("/rankings");
    if (response.error) return [];

    setStorageValue(ALL_RANKINGS, JSON.stringify(response));
    return response;
};