<template>
  <table class="table table-dark table-hover">
    <thead>
    <tr>
      <th scope="col">Valdkond</th>
      <th scope="col">Ametikoht</th>
      <th scope="col">Lisamise kuupäev</th>
      <th scope="col"> </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="internship in companyActiveInternships" :key="internship.internshipId">
      <td>{{ internship.categoryName }}</td>
      <td>{{ internship.title }}</td>
      <td>{{ internship.dateAdded }}</td>
      <td><button class="hoverable-icon" style="margin-left: 10px" @click="goToEditInternshipView(internship.internshipId)"><font-awesome-icon :icon="['far', 'pen-to-square']" /></button></td>
    </tr>
    </tbody>
  </table>
</template>
<script>
import router from '@/router';

export default {
  name: 'CompanyActiveInternshipsTable',

  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      companyActiveInternships: [
        {
          internshipId: 0,
          categoryName: "",
          title: "",
          dateAdded: ""
        }
      ]

    }
  },
  methods: {
    getCompanyActiveInternships: function () {
      this.$http.get("/active-internships", {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.companyActiveInternships = response.data
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
    goToEditInternshipView(internshipId) {
      this.$router.push({ name: 'newOfferRoute', query: { internshipId: internshipId } })
    },

  },
  beforeMount() {
    this.getCompanyActiveInternships()
  }
}
</script>
