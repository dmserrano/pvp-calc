<template>
    <div>
        <div class="form-group mb-0 mr-2 flex-grow-1">
            <input
                class="form-control"
                max="15"
                min="0"
                name="attack"
                placeholder="Attack IV"
                type="number"
                :value="selectedIvValues.attack"
                @input="setSelectedIvValues"
            />
        </div>

        <div class="form-group mb-0 mr-2 flex-grow-1">
            <input
                class="form-control"
                max="15"
                min="0"
                name="defense"
                placeholder="Defense IV"
                type="number"
                :value="selectedIvValues.defense"
                @input="setSelectedIvValues"
            />
        </div>

        <div class="form-group mb-0 flex-grow-1">
            <input
                class="form-control"
                max="15"
                min="0"
                name="hp"
                placeholder="HP IV"
                type="number"
                :value="selectedIvValues.hp"
                @input="setSelectedIvValues"
            />
        </div>
    </div>
</template>

<script>
// TODO: add front end validation for values greater than 15
export default {
    props: {
        selectedIvValues: { type: Object },
        setSelectedIvValues: { type: Function }
    }
};
</script>