<template>
  <table class="table table-dark table-hover">
    <thead>
    <tr>
      <th scope="col">Asukoht</th>
      <th scope="col">Valdkond</th>
      <th scope="col">Ettevõtte nimi</th>
      <th scope="col">Ametikoht</th>
      <th scope="col">Lisamise kuupäev</th>
      <th scope="col"><font-awesome-icon :icon="['fas', 'image']"/></th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="internship in internships" :key="internship.internshipId">
        <td>{{ internship.regionName }}</td>
        <td>{{ internship.categoryName }}</td>
        <td>{{ internship.companyName }}</td>
        <td>{{ internship.title }}</td>
        <td>{{ internship.dateAdded }}</td>
        <td>
          <img :src="internship.imageData" alt="Internship Image" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import router from '@/router';

export default {
  name: 'InternshipsTable',
  props: {
    selectedRegionId: Number,
    selectedCategoryId: Number
  },

  data() {
    return {
      errorResponse: {
        message: '',
        errorCode: 0
      },
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
    getInternships(){
      this.$http.get("/internships", {
            params: {
              regionId: this.selectedRegionId,
              categoryId: this.selectedCategoryId
            }
          }
      ).then(response => {
        this.internships = response.data
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
  },
  mounted() {
    this.getInternships()
  }
}
</script>