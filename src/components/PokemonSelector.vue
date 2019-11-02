<template>
    <div>
        <v-select
            :getOptionLabel="({ dex, speciesName }) => `#${dex} ${speciesName}`"
            inputId="pokemon-selector"
            placeholder="Enter Pokemon name or number"
            :filterBy="handleFilterBy"
            :selectOnTab="true"
            :options="allPokemon"
            :value="selectedValue"
            @input="handleOnChange"
        />
    </div>
</template>

<script>

export default {
    props: {
        addSelectedPokemon: { type: Function },
        allPokemon: { type: Array },
        selectedValue: { type: Object, default: () => ({}) },
        setSelectedPokemon: { type: Function }
    },

    methods: {
        handleFilterBy({ dex }, label, search) {
            return `${dex}`.includes(search) || label.toLowerCase().includes(search);
        },

        handleOnChange(value) {
            this.setSelectedPokemon(value);
        }
    }
};
</script>