<template>
  <select v-model="selectedSortValue" @change="emitSelectedSortValue" class="form-select" aria-label="Default select example">
    <option selected value="1">Järjesta uuemad</option>
    <option value="2">Järjesta vanemad</option>
  </select>
</template>
<script>
export default {
  name: 'SortDropdown',

  data(){
    return{
      selectedSortValue: '1'
    }
  },
  methods: {
    emitSelectedSortValue() {
      this.$emit('event-emit-selected-sort-value', Number(this.selectedSortValue))
    },

    setSelectedSortValue(sortValue) {
      this.selectedSortValue = sortValue
    }
  }
}
</script>