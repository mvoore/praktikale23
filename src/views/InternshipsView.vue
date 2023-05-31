<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col">
        <SortDropdown @event-emit-selected-sort-value="setSelectedSortValue"/>
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
        <InternshipsTable ref="internshipsTableRef"/>
      </div>
    </div>
  </div>

</template>

<script>
import SortDropdown from "@/components/company/SortDropdown.vue";
import RegionsDropdown from "@/components/company/address/RegionsDropdown.vue";
import CategoriesDropdown from "@/components/company/address/CategoriesDropdown.vue";
import InternshipsTable from "@/components/intern/InternshipsTable.vue";

export default {
  name: "InternshipsView",
  components: {
    InternshipsTable,
    CategoriesDropdown,
    RegionsDropdown,
    SortDropdown
  },

  data() {
    return {
      selectedRegionId: 0,
      selectedCategoryId: 0,
      selectedSortValue: 1,
      selectedStartDate: null,
      selectedEndDate: null
    }
  },

  methods: {
    setSelectedRegionId(selectedRegionId) {
      this.$refs.internshipsTableRef.setSelectedRegionId(selectedRegionId)
      this.$refs.internshipsTableRef.getInternships()
    },
    setSelectedCategoryId(selectedCategoryId) {
      this.$refs.internshipsTableRef.setSelectedCategoryId(selectedCategoryId)
      this.$refs.internshipsTableRef.getInternships()
    },
    setSelectedSortValue(selectedSortValue) {
      this.$refs.internshipsTableRef.setSelectedSortValue(selectedSortValue)
      this.$refs.internshipsTableRef.getInternships()
    }
  },


}

</script>