<template>
    <div class="border-bottom p-2">
        <div class="text-capitalize font-weight-bold">{{ name }}</div>

        <template v-if="stats">
            <!-- TODO: pass in the selected league here -->
            <div>League Rank:
                <span class="font-weight-bold">{{ leagueRankText }}</span>
            </div>

            <!-- TODO: don't display the following data if it's not for Great League -->
            <div class="row">
                <div class="col-md-6">
                    <span>IV Spreads: </span>

                    <ul class="m-0">
                        <li>
                            Wild Catch:
                            <span class="">#{{ stats.ranks.all }}</span>
                        </li>

                        <li>
                            Weather Boosted:
                            <span class="">#{{ stats.ranks.weatherBoosted }}</span>
                        </li>

                        <li>
                            Hatched:
                            <span>#{{ stats.ranks.hatched }}</span>
                        </li>
                    </ul>
                </div>

                <div class="col-md-6">
                    <div>
                        Target CP:
                        <span class="font-weight-bold">{{ stats.targetCp }}</span>
                    </div>

                    <div>
                        Target Level:
                        <span class="font-weight-bold">{{ stats.targetLevel }}</span>
                    </div>

                    <div>
                        Total Startdust:
                        <span class="font-weight-bold">{{ formatNumber(stats.costs.stardust) }}</span>
                    </div>

                    <div>
                        Total Candy:
                        <span class="font-weight-bold">{{ stats.costs.candy }}</span>
                        <p class="text-danger small mb-0">Not including evolution candy!</p>
                    </div>
                </div>
            </div>
        </template>

        <div v-else>
            Does not qualify for this league.
        </div>
    </div>
</template>

<script>
import { findIndex } from "lodash";
import numeral from "numeral";

export default {
    props: {
        allRankings: { type: Array, required: true },
        name: { type: String, required: true },
        stats: { type: Object, default: () => ({} )}
    },

    // TODO: add computed for getting the pokemon from the "allPokemon" array
    computed: {
        leagueRankText() {
            return this.selectedPokemonRank
                ? `#${this.selectedPokemonRank}` : "Not ranked";
        },

        selectedPokemonRankData() {
            const rankMatch = this.allRankings.find(
                ({ speciesId }) => speciesId === this.name
            );

            return rankMatch ? rankMatch : null;
        },

        selectedPokemonRank() {
            if (!this.selectedPokemonRankData) return;

            const match = { speciesId: this.name };
            return findIndex(this.allRankings, match) + 1;
        }
    },

    methods: {
        formatNumber(number) {
            return numeral(number).format("0,0");
        },
    }
};
</script>