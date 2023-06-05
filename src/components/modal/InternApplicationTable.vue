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
    <tr v-for="application in internApplications" :key="application.applicationId">
      <td>{{ application.dateAdded }}</td>
      <td>
          <font-awesome-icon @click="goToEditApplicationView(application.applicationId)" class="hoverable-icon" :icon="['far', 'pen-to-square']" />
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
import router from '@/router';

export default {
  name: 'InternApplicationTable',

  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      internApplications: [
        {
          internshipId: 0,
          dateAdded: "",

        }
      ]

    }
  },
  methods: {

      getInternApplications: function () {
      this.$http.get("/intern/applications", {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.internApplications = response.data
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
    goToEditApplicationView(applicationId) {
      this.$router.push({ name: 'applicationRoute', query: { applicationId: applicationId } })
    },

  },
  beforeMount() {
    this.getInternApplications()
  }
}
</script>
