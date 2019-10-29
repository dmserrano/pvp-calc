<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Navbar</span>
        </nav>

        <div class="container-fluid">
            <h4 class="my-4">PVP Calculation</h4>

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <PokemonSelector
                        class="mb-4"
                        :addSelectedPokemon="addSelectedPokemon"
                        :allPokemon="allPokemon"
                        :selectedValue="selectedPokemon"
                        :setSelectedPokemon="setSelectedPokemon"
                    />

                    <IndividualValueInputs
                        class="d-flex mb-4"
                        :selectedIvValues="selectedIvValues"
                        :setSelectedIvValues="setSelectedIvValues"
                    />

                    <LeagueRankingSection
                        :selectedPokemonRank="selectedPokemonRank"
                        :selectedPokemonRankData="selectedPokemonRankData"
                        v-if="selectedPokemon"
                    />

                    <!-- TODO: display a message or not? -->
                    <!-- <h4 v-else>This Pokemon is not ranked</h4> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { findIndex } from "lodash";
import { getAllPokemon, getRankings } from "@/api";

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
            selectedIvValues: {
                attack: "",
                defense: "",
                hp: ""
            },
            // selectedPokemon: null
            // TODO: undo after dev
            selectedPokemon: {"dex":334,"speciesName":"Altaria","speciesId":"altaria","baseStats":{"atk":141,"def":201,"hp":181},"types":["dragon","flying"],"fastMoves":["DRAGON_BREATH","PECK"],"chargedMoves":["DAZZLING_GLEAM","DRAGON_PULSE","SKY_ATTACK"],"defaultIVs":{"cp1500":[28.5,2,14,12],"cp2500":[40,15,15,15]}}
        };
    },

    computed: {
        selectedPokemonRankData() {
            if (!this.selectedPokemon) return;

            const rankMatch = this.allRankings.find(
                ({ speciesName }) => speciesName === this.selectedPokemon.speciesName);

            return rankMatch ? rankMatch : null;
        },

        selectedPokemonRank() {
            if (!this.selectedPokemonRankData) return;

            const match = { rating: this.selectedPokemonRankData.rating };
            return findIndex(this.allRankings, match) + 1;
        }
    },

    async created() {
        const [ allPokemon, allRankings ] = await Promise.all([
            getAllPokemon(),
            getRankings()
        ]);

        this.allPokemon = allPokemon;
        this.allRankings = allRankings;
    },

    methods: {
        addSelectedPokemon(selectedValue) {
            this.allSelectedPokemon.push(selectedValue);
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
</style>
