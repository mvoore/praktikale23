<template>
    <div class="container">
        <div class="row mb-3">
            <div class="col">
                <SortDropdown/>
            </div>
            <div class="col">
                <RegionsDropdown @event-emit-selected-region-id="setSelectedRegionId"/>
            </div>
            <div class="col">
                <CategoriesDropdown @event-emit-selected-category-id="setSelectedCategoryId"/>
            </div>
        </div>
        <div class="row">
            <div class="col">
              <InternshipTable/>
            </div>
        </div>
    </div>

</template>

<script>
import SortDropdown from "@/components/SortDropdown.vue";
import RegionsDropdown from "@/components/RegionsDropdown.vue";
import CategoriesDropdown from "@/components/CategoriesDropdown.vue";
import InternshipTable from "@/components/InternshipsTable.vue";

export default {
    name: "InternshipsView",
    components: {
      InternshipTable,
        CategoriesDropdown,
        RegionsDropdown,
        SortDropdown
    },

    data() {
        return {
            selectedRegionId: 0,
            selectedCategoryId: 0,
        }
    },

    methods: {
        setSelectedRegionId(selectedRegionId) {
            this.selectedRegionId = selectedRegionId

        },
        setSelectedCategoryId(selectedCategoryId) {
            this.selectedCategoryId = selectedCategoryId

        },
    },



}

</script>