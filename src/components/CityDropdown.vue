<template>

  <div class="col-md-4">
    <select v-model="selectedCityId" @change="emitSelectedCityId" class="form-select"
            aria-label="Default select example">
      <option selected value="0">Kõik Linnad</option>
      <option v-for="city in cities" :key="city.cityId" :value="city.cityId">{{ city.cityName }}
      </option>
    </select>
  </div>

</template>
<script>
import router from "@/router";

export default {
  name: 'CityDropdown',

  data() {
    return {
      selectedCityId: '0',
      cities:
          [
            {
              cityId: 0,
              cityName: ''
            }
          ]
    }
  },

  methods: {

    emitSelectedCityId() {
      this.$emit('event-emit-selected-city-id', Number(this.selectedCityId))
    },
    getCities() {
      this.$http.get("/cities")
          .then(response => {
            this.cities = response.data;
          }).catch(error => {
        router.push({name: 'errorRoute'})
      })

    },
    setSelectedCityId(cityId) {
      this.selectedCityId = cityId

    },


  },
  beforeMount() {
    this.getCities();
  }


}
</script>