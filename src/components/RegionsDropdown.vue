<template>


    <select v-model="selectedRegionId" @change="emitSelectedRegionId" class="form-select"
            aria-label="Default select example">
        <option selected value="0">Kõik asukohad</option>
        <option v-for="region in regions" :key="region.regionId" :value="region.regionId">{{ region.regionName }}
        </option>
    </select>
</template>

<script>
import router from "@/router";

export default {
    name: 'RegionsDropdown',

    data() {
        return {
            selectedRegionId: '0',
            regions:
                [
                    {
                        regionId: 0,
                        regionName: ''
                    }
                ]
        }
    },

    methods: {


        emitSelectedRegionId() {
            this.$emit('event-emit-selected-region-id', Number(this.selectedRegionId))
        },


        getRegions() {
            this.$http.get("/regions")
                .then(response => {
                    this.regions = response.data;
                }).catch(error => {
                router.push({name: 'errorRoute'})
            })

        },

        setSelectedRegionId(regionId) {
            this.selectedRegionId = regionId

        },

    },
    beforeMount() {
        this.getRegions();
    }

}
</script>