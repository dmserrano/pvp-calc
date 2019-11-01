<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">PVP Complete</span>
        </nav>

        <div class="container-fluid">
            <h4 class="my-4">Enter Stats</h4>

            <div class="row">
                <div
                    class="col-xl-4 col-lg-6 col-md-6 col-sm-6"
                    v-on:keyup.enter="getPokemonStats"
                >
                    <div class="d-flex mb-4">
                        <PokemonSelector
                            class="mr-2 w-75"
                            :addSelectedPokemon="addSelectedPokemon"
                            :allPokemon="allPokemon"
                            :selectedValue="selectedPokemon"
                            :setSelectedPokemon="setSelectedPokemon"
                        />

                        <div class="form-group w-25 mb-0">
                            <input
                                class="form-control"
                                max="40"
                                min="0"
                                placeholder="Level"
                                type="number"
                                :value="selectedLevel"
                                @input="({ target }) => selectedLevel = target.value"
                            />
                        </div>
                    </div>

                    <IndividualValueInputs
                        class="d-flex mb-4"
                        :selectedIvValues="selectedIvValues"
                        :setSelectedIvValues="setSelectedIvValues"
                    />

                    <div class="mb-4">
                        <button
                            class="btn btn-primary"
                            :disabled="isCalculateStatsDisabled"
                            @click="getPokemonStats"
                        >
                            {{
                                isFetchingStats ? "Loading..." : "Calculate"
                            }}
                        </button>
                    </div>

                    <hr>

                    <LeagueRankingSection
                        :allRankings="allRankings"
                        :selectedPokemonStats="selectedPokemonStats"
                        v-if="selectedPokemonStats"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    getAllPokemon,
    getEvolutionChain,
    getIvSpreads,
    getRankings
} from "@/api";

import IndividualValueInputs from "@/components/IndividualValueInputs";
import LeagueRankingSection from "@/components/LeagueRankingSection";
import PokemonSelector from "@/components/PokemonSelector";

export default {
    name: "App",

    components: {
        IndividualValueInputs,
        LeagueRankingSection,
        PokemonSelector
    },

    data() {
        return {
            allPokemon: [],
            allRankings: [],
            allSelectedPokemon: [],
            isFetchingStats: false,
            selectedIvValues: {
                attack: "",
                defense: "",
                hp: ""
            },
            selectedLevel: "",
            selectedPokemon: null,
            selectedPokemonStats: null
        };
    },

    computed: {
        ivsString() {
            const { attack, defense, hp } = this.selectedIvValues;
            return `${attack}/${defense}/${hp}`;
        },

        isCalculateStatsDisabled() {
            const { attack, defense, hp } = this.selectedIvValues;
            return this.isFetchingStats || !this.selectedPokemon || !attack || !defense || !hp;
        }
    },

    async created() {
        const allPokemon = await getAllPokemon();
        this.allPokemon = allPokemon;
    },

    methods: {
        addSelectedPokemon(selectedValue) {
            this.allSelectedPokemon.push(selectedValue);
        },

        async getPokemonStats(event) {
            if (this.isCalculateStatsDisabled) return;
            if (event && event.target && event.target.name === "pokemon-selector") return;

            const { dex, speciesId } = this.selectedPokemon;
            this.isFetchingStats = true;

            const [ rankings, evolutionList ] = await Promise.all([
                getRankings(),
                getEvolutionChain(dex),
            ]);
            const ivSpreads = await getIvSpreads(speciesId, evolutionList, this.ivsString, this.selectedLevel);

            this.allRankings = rankings;
            this.isFetchingStats = false;
            this.selectedPokemonStats = ivSpreads;
        },

        setSelectedIvValues({ target }) {
            const update = { [target.name]: target.value };
            this.selectedIvValues = { ...this.selectedIvValues, ...update };
        },

        setSelectedPokemon(selectedValue) {
            this.selectedPokemon = selectedValue;
        }
    }
};
</script>
