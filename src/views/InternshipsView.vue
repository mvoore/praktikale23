<template>

  <div class="container">
    <div class="row mb-3">
      <div class="col">
        <SortDropdown/>
      </div>
      <div class="col">
        <RegionsDropdown ref="regionsDropdownRef" @event-emit-selected-region-id="selectedRegionId"/>
      </div>
      <div class="col">
        <CategoriesDropdown/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-dark table-hover">
          <thead>
          <tr>
            <th scope="col">Ettevõtte nimi</th>
            <th scope="col">Asukoht</th>
            <th scope="col">Valdkond</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Merko</td>
            <td>Harjumaa</td>
            <td>Ehitus</td>
          </tr>
          <tr>
            <td>Mäkk</td>
            <td>Harjumaa</td>
            <td>Kokandus</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
import SortDropdown from "@/components/SortDropdown.vue";
import RegionsDropdown from "@/components/RegionsDropdown.vue";
import CategoriesDropdown from "@/components/CategoriesDropdown.vue";

export default {
  name: "InternshipsView",
  components: {CategoriesDropdown, RegionsDropdown, SortDropdown},

  data() {
    return{
      selectedRegionId: 0,
    }
  },
  methods:{
    selectedRegionId(selectedRegionId) {
      this.selectedRegionId = selectedRegionId
    },
    setAllFields() {
      this.$refs.regionsDropdownRef.setSelectedRegionId(this.selectedRegionId)
    },

  }
}

</script>