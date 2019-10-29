import { get } from "./fetch";

export const getAllPokemon = async () => {
    const response = await get("/allpokemon");
    return response;
};

export const getRankings = async () => {
    const response = await get("/rankings");
    return response;
};