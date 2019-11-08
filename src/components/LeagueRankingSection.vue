<template>
    <div>
        <h4>Stats</h4>

        <!-- TODO: move to about stats section -->
        <!-- <div class="d-flex align-items-end mb-4">
            <small class="small">
                (Using data from
                <a
                    target="_blank"
                    href="https://pvpoke.com/rankings">
                    PvPoke.com's Ranking
                </a> tool)
            </small>
        </div> -->

        <PokemonStatCard
            v-for="(stats, name) in selectedPokemonStats"
            :addSavedResult="addSavedResult"
            :allRankings="allRankings"
            :key="name"
            :ivsString="selectedPokemonIvs"
            :name="name"
            :selectedPokemonName="selectedPokemon.speciesId"
            :stats="stats"
        />
    </div>
</template>

<script>
import PokemonStatCard from "./PokemonStatCard";

export default {
    components: {
        PokemonStatCard
    },

    props: {
        addSavedResult: { type: Function, required: true },
        allRankings: { type: Array, required: true },
        selectedPokemon: { type: Object, required: true },
        selectedPokemonIvs: { type: String, required: true },
        selectedPokemonStats: { type: Object, required: true },
    },
};
</script>