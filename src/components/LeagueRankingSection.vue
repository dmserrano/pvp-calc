<template>
    <div>
        <div class="d-flex align-items-end mb-4">
            <h4 class="mb-0 mr-2">Ranking</h4>

            <small class="small">
                (Using data from
                <a
                    target="_blank"
                    href="https://pvpoke.com/rankings/all/1500/overall/altaria/">
                    PvPoke.com's Ranking
                </a> tool)
            </small>
        </div>

        <h5>
            Great League Rank: {{ leagueRankText }}
        </h5>


    </div>
</template>

<script>
export default {
    props: {
        selectedPokemonRank: { type: Number, default: 0 },
        selectedPokemonRankData: { type: Object, default: () => ({}) }
    },

    computed: {
        leagueRankText() {
            return this.selectedPokemonRank ? `#${this.selectedPokemonRank}` : "Not ranked";
        }
    }
};
</script>