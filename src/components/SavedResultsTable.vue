<template>
    <div class="w-100" style="overflow-x: scroll">
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
        </v-client-table>
    </div>
</template>

<script>
import numeral from "numeral";

// TODO: move all column name to constants
export default {
    props: {
        savedResults: { type: Array, required: true }
    },

    data() {
        return {
            columns: [
                "currentName",
                "resultName",
                "ivs",
                "leagueRank",
                "stats.targetCp",
                "stats.targetLevel",
                "stats.ranks.all",
                "stats.ranks.weatherBoosted",
                "stats.ranks.hatched",
                "stats.costs.candy",
                "stats.costs.stardust",
            ],

            options: {
                headings: {
                    currentName: "Current Species",
                    resultName: "Target Species",
                    ivs: "IVs (ATK/DEF/HP)",
                    leagueRank: "League Rank",
                    "stats.targetCp": "Target CP",
                    "stats.targetLevel": "Target Level",
                    "stats.ranks.all": () => <span>Wild Catch <br />IV Spread</span>,
                    "stats.ranks.weatherBoosted": () => <span>Weather Boosted<br />IV Spread</span>,
                    "stats.ranks.hatched": () => <span>Hatched<br />IV Spread</span>,
                    "stats.costs.candy": "Candy Upgrade Costs",
                    "stats.costs.stardust": "Stardust Upgrade Costs",
                },
            }
        };
    },

    methods: {
        formatNumber(number) {
            return numeral(number).format("0,0");
        },
    }
};
</script>

<style scoped>
small, span {
    font-weight: bold;
}
</style>