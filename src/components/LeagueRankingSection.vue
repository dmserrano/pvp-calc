<template>
    <div>
        <h4 class="">Stats</h4>

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
            :allRankings="allRankings"
            :key="name"
            :name="name"
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
        allRankings: { type: Array, required: true },
        selectedPokemonStats: { type: Object, required: true }
    },
};
</script>