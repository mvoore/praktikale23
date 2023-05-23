<template>
  <select v-model="selectedRegionId" @change="onChange" class="form-select">
    <option selected value="0">Kõik asukohad</option>
    <option v-for="region in regions" :key="region.regionId" :value="region.regionId">{{ region.regionName }}</option>
  </select>
</template>

<script>
import router from "@/router";

export default {
  name: 'RegionsDropdown',
  data() {
    return {
      selectedRegionId: '0',
      regions: [
        {
          regionId: 0,
          regionName: ''
        }
      ]
    }
  },
  methods: {
    onChange() {
      this.$emit('change', Number(this.selectedRegionId))
    },
    getRegions() {
      this.$http.get("/regions")
          .then(response => {
            this.regions = response.data
          })
          .catch(() => router.push({name: 'errorRoute'}))
    },
    setSelectedRegionId(regionId) {
      this.selectedRegionId = regionId
    },
  },
  beforeMount() {
    this.getRegions()
  }
}
</script>