<template>
    <div id="app">
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">PVP Complete</span>
        </nav>

        <div class="container-fluid">
            <div class="row no-gutters">
                <div
                    class="col-xl-3 col-xl-3 col-md-6 border rounded p-4 mt-4 h-100"
                    v-on:keyup.enter="getPokemonStats"
                >
                    <h4 class="mb-4 text-center">Enter Stats</h4>

                    <div class="row">
                        <PokemonSelector
                            class="col-md-8 mb-4"
                            :addSavedResult="addSavedResult"
                            :allPokemon="allPokemon"
                            :selectedValue="selectedPokemon"
                            :setSelectedPokemon="setSelectedPokemon"
                        />

                        <div class="form-group mb-4 col-md-4">
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
                </div>

                <LeagueRankingSection
                    class="col-xl-9 col-lg-12 col-md-12 mt-4"
                    :addSavedResult="addSavedResult"
                    :allRankings="allRankings"
                    :selectedPokemon="selectedPokemon"
                    :selectedPokemonIvs="ivsString"
                    :selectedPokemonStats="selectedPokemonStats"
                    v-if="selectedPokemonStats"
                />

                <hr>

                <SavedResultsTable
                    class="col-12"
                    :removeSavedResult="removeSavedResult"
                    :savedResults="savedResults"
                    :updateSavedResult="updateSavedResult"
                    v-if="savedResults.length"
                />
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
import { checkVisitationToken, getSavedResults } from "@/services/storage";

import IndividualValueInputs from "@/components/IndividualValueInputs";
import LeagueRankingSection from "@/components/LeagueRankingSection";
import PokemonSelector from "@/components/PokemonSelector";
import SavedResultsTable from "@/components/SavedResultsTable";

const defaultIvValues = {
    attack: "",
    defense: "",
    hp: ""
};

export default {
    name: "App",

    components: {
        IndividualValueInputs,
        LeagueRankingSection,
        PokemonSelector,
        SavedResultsTable
    },

    data() {
        return {
            allPokemon: [],
            allRankings: [],
            isFetchingStats: false,
            savedResults: [],
            selectedIvValues: defaultIvValues,
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
        addSavedResult(result) {
            this.savedResults.push(result);
            this.clearSelectedValues();
        },

        removeSavedResult(id) {
            this.savedResults = this.savedResults.filter(
                result => result.id !== id ? result : false
            );
        },

        updateSavedResult(update) {
            this.savedResults = this.savedResults.map(
                result => result.id === update.id ? update : result
            );
        },

        clearSelectedValues() {
            this.selectedIvValues = { ...defaultIvValues };
            this.selectedLevel = "";
            this.selectedPokemon = null;
            this.selectedPokemonStats = null;
        },

        async getOnLoadData() {
            const [ allPokemon, allRankings ] = await Promise.all([
                getAllPokemon(),
                getRankings(),
            ]);

            this.allPokemon = allPokemon;
            this.allRankings = allRankings;
            this.savedResults = getSavedResults();
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

<style>
html, body, #app {
    height: 100%;
}
</style>
