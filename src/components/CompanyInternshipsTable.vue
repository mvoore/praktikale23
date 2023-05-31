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
    <tr v-for="internship in companyInternships" :key="internship.internshipId">
      <td>{{ internship.categoryName }}</td>
      <td>{{ internship.title }}</td>
      <td>{{ internship.dateAdded }}</td>
      <td>
          <font-awesome-icon @click="goToEditInternshipView(internship.internshipId)" class="hoverable-icon" :icon="['far', 'pen-to-square']" />
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
import router from '@/router';

export default {
  name: 'CompanyInternshipsTable',

  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      companyInternships: [
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
    getCompanyInternships: function () {
      this.$http.get("/company-internships", {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.companyInternships = response.data
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
    goToEditInternshipView(internshipId) {
      this.$router.push({ name: 'newOfferRoute', query: { internshipId: internshipId } })
    },

  },
  beforeMount() {
    this.getCompanyInternships()
  }
}
</script>
