<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">PVP Complete</span>
        </nav>

        <div class="container-fluid">
            <h4 class="my-4 text-center">Enter Stats</h4>

            <div class="d-flex">
                <div
                    class="w-50 m-auto"
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
import { checkVisitationToken } from "@/services/storage";

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
        checkVisitationToken();
        this.getOnLoadData();
    },

    methods: {
        addSelectedPokemon(selectedValue) {
            this.allSelectedPokemon.push(selectedValue);
        },

        async getOnLoadData() {
            const [ allPokemon, allRankings ] = await Promise.all([
                getAllPokemon(),
                getRankings(),
            ]);

            this.allPokemon = allPokemon;
            this.allRankings = allRankings;
        },

        async getPokemonStats(event) {
            if (this.isCalculateStatsDisabled) return;
            if (event && event.target && event.target.name === "pokemon-selector") return;

            const { dex, speciesId } = this.selectedPokemon;
            this.isFetchingStats = true;

            const evolutionList = await getEvolutionChain(dex);
            const ivSpreads = await getIvSpreads(speciesId, evolutionList, this.ivsString, this.selectedLevel);

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
