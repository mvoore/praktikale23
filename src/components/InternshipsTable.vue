<template>
  <table class="table table-dark table-hover">
    <thead>
    <tr>
      <th scope="col">Asukoht</th>
      <th scope="col">Valdkond</th>
      <th scope="col">Ettevõtte nimi</th>
      <th scope="col">Ametikoht</th>
      <th scope="col">Lisamise kuupäev</th>
      <th scope="col">
        <font-awesome-icon :icon="['fas', 'image']"/>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="internship in internships" :key="internship.internshipId">
      <td>{{ internship.regionName }}</td>
      <td>{{ internship.categoryName }}</td>
      <td>{{ internship.companyName }}</td>
      <td>{{ internship.title }}</td>
      <td>{{ internship.dateAdded }}</td>
      <td>{{ internship.imageData }}</td>
    </tr>
    </tbody>
  </table>
</template>
<script>
import router from '@/router';

export default {
  name: 'InternshipsTable',
  data() {
    return {
      selectedRegionId: 0,
      selectedCategoryId: 0,
      selectedSortValue: 1,
      internships: [
        {
          internshipId: 0,
          companyName: '',
          categoryName: '',
          regionName: '',
          title: '',
          imageData: '',
          dateAdded: ''
        }
      ]


    }
  },
  methods: {

    getInternships() {
      this.$http.get("/internships", {
            params: {
              regionId: this.selectedRegionId,
              categoryId: this.selectedCategoryId,
              sortValue: this.selectedSortValue
            }
          }
      ).then(response => {
        this.internships = response.data

      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },

    setSelectedRegionId(selectedRegionId) {
      this.selectedRegionId = selectedRegionId
    },

    setSelectedCategoryId(selectedCategoryId) {
      this.selectedCategoryId = selectedCategoryId
    },

    setSelectedSortValue(selectedSortValue) {
      this.selectedSortValue = selectedSortValue
    }


  },
  mounted() {
    this.getInternships()

  }

}
</script>