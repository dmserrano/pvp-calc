<template>
    <div class="w-100" style="overflow-x: scroll">
        <div class="d-flex">
            <h4 class="my-4 mr-4">Saved Results</h4>

            <div class="d-flex align-items-center">
                <button
                    class="btn btn-primary"
                    @click="handleSaveResults"
                    v-if="storageAvailable()"
                >
                    Save Results
                </button>
            </div>
        </div>

        <v-client-table
            :columns="columns"
            :data="savedResults"
            :options="options"
        >
            <span
                slot="currentName"
                slot-scope="{ row }"
                class="text-capitalize"
                v-text="row.currentName"
            />

            <span
                slot="resultName"
                slot-scope="{ row }"
                class="text-capitalize"
                v-text="row.resultName"
            />

            <span
                slot="ivs"
                slot-scope="{ row }"
                class="text-capitalize"
                v-text="row.ivs"
            />

            <span
                slot="leagueRank"
                slot-scope="{ row }"
                class="text-capitalize"
                v-text="`#${row.leagueRank}, Great League`"
            />

            <span
                slot="stats.targetCp"
                slot-scope="{ row: { stats } }"
                class="text-capitalize"
                v-text="stats.targetCp"
            />

            <span
                slot="stats.targetLevel"
                slot-scope="{ row: { stats } }"
                class="text-capitalize"
                v-text="stats.targetLevel"
            />

            <span
                slot="stats.ranks.all"
                slot-scope="{ row: { stats: { ranks } } }"
                v-text="ranks.all"
            />

            <span
                slot="stats.ranks.weatherBoosted"
                slot-scope="{ row: { stats: { ranks } } }"
                v-text="ranks.weatherBoosted"
            />

            <span
                slot="stats.ranks.hatched"
                slot-scope="{ row: { stats: { ranks } } }"
                v-text="ranks.hatched"
            />

            <span
                slot="stats.costs.candy"
                slot-scope="{ row: { stats: { costs } } }"
                v-text="costs.candy"
            />

            <span
                slot="stats.costs.stardust"
                slot-scope="{ row: { stats: { costs } } }"
                v-text="formatNumber(costs.stardust)"
            />

            <textarea
                slot="notes"
                slot-scope="{ row }"
                :value="row.notes"
                @blur="event => handleUpdate(event, row)"
            />

            <div
                slot="actions"
                slot-scope="{ row }"
            >
                <button
                    class="btn btn-danger"
                    @click="() => removeSavedResult(row.id)"
                    v-if="storageAvailable()"
                >
                    Remove
                </button>
            </div>
        </v-client-table>
    </div>
</template>

<script>
import numeral from "numeral";
import { saveResults, storageAvailable } from "@/services/storage";

import {
    ACTIONS,
    CURRENT_NAME,
    RESULT_NAME,
    IVS,
    LEAGUE_RANK,
    TARGET_CP,
    TARGET_LEVEL,
    WILD_CATCH_RANK,
    WEATHER_BOOSTED_RANK,
    HATCHED_RANK,
    CANDY_COST,
    STARDUST_COST,
    NOTES,
} from "@/constants/resultsTableColumns";

export default {
    props: {
        savedResults: { type: Array, required: true },
        removeSavedResult: { type: Function, required: true },
        updateSavedResult: { type: Function, required: true }
    },

    data() {
        return {
            columns: [
                CURRENT_NAME,
                RESULT_NAME,
                IVS,
                LEAGUE_RANK,
                TARGET_CP,
                TARGET_LEVEL,
                WILD_CATCH_RANK,
                WEATHER_BOOSTED_RANK,
                HATCHED_RANK,
                CANDY_COST,
                STARDUST_COST,
                NOTES,
                ACTIONS,
            ],

            options: {
                headings: {
                    [CURRENT_NAME]: "Current Species",
                    [RESULT_NAME]: "Target Species",
                    [IVS]: "IVs (ATK/DEF/HP)",
                    [LEAGUE_RANK]: "League Rank",
                    [TARGET_CP]: "Target CP",
                    [TARGET_LEVEL]: "Target Level",
                    [WILD_CATCH_RANK]: "Wild Catch IV Spread",
                    [WEATHER_BOOSTED_RANK]: "Weather Boosted IV Spread",
                    [HATCHED_RANK]: "Hatched IV Spread",
                    [CANDY_COST]: "Candy Upgrade Costs",
                    [STARDUST_COST]: "Stardust Upgrade Costs",
                    [NOTES]: "Notes",
                    [ACTIONS]: ""
                },

                perPageValues: [ 25, 50, 100 ]
            }
        };
    },

    methods: {
        formatNumber(number) {
            return numeral(number).format("0,0");
        },

        handleUpdate(event, row) {
            const update = { ...row, notes: event.target.value };
            this.updateSavedResult(update);
        },

        handleSaveResults() {
            saveResults(this.savedResults);
        },

        storageAvailable
    }
};
</script>

<style scoped>
small, span {
    font-weight: bold;
}
</style>