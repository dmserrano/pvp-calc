<template>
    <div class="px-2 pb-2 flex-grow-1">
        <div class="border rounded shadow-sm p-4">
            <div class="d-flex justify-content-between">
                <div class="text-capitalize font-weight-bold">{{ name }}</div>

                <button
                    class="btn btn-sm btn-primary"
                    @click="handleSaveResult"
                >
                    Save Result
                </button>
            </div>

            <template v-if="stats">
                <!-- TODO: pass in the selected league here -->
                <div>Great League Rank:
                    <span class="font-weight-bold">{{ leagueRankText }}</span>
                </div>

                <!-- TODO: don't display the following data if it's not for Great League -->
                <div class="row">
                    <div class="col-md-12">
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

                    <div class="col-md-12">
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
    </div>
</template>

<script>
import createRandomId from "crypto-random-string";
import { findIndex } from "lodash";
import numeral from "numeral";
import Swal from "sweetalert2";

export default {
    props: {
        addSavedResult: { type: Function, required: true },
        allRankings: { type: Array, required: true },
        ivsString: { type: String, required: true },
        name: { type: String, required: true },
        selectedPokemonName: { type: String, required: true },
        stats: { type: Object, default: () => ({} )}
    },

    // TODO: add computed for getting the pokemon from the "allPokemon" array
    computed: {
        leagueRankText() {
            return this.selectedPokemonRank
                ? `#${this.selectedPokemonRank}` : "Not ranked";
        },

        resultStats() {
            return {
                currentName: this.selectedPokemonName,
                id: createRandomId({ length: 10 }),
                ivs: this.ivsString,
                leagueRank: this.selectedPokemonRank,
                resultName: this.name,
                stats: this.stats
            };
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

        async handleSaveResult() {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "After saving this result the other displayed results will be erased.",
                type: "warning",
                showCancelButton: true,
                cancelButtonColor: "#d33",
                confirmButtonText: "Save"
            });

            if (!result.value) return;

            this.addSavedResult(this.resultStats);
        }
    }
};
</script>