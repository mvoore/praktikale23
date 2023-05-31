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
      <tr v-for="internship in companyInactiveInternships" :key="internship.internshipId">
        <td>{{ internship.categoryName }}</td>
        <td>{{ internship.title }}</td>
        <td>{{ internship.dateAdded }}</td>
      <td><font-awesome-icon :icon="['far', 'square-plus']" /></td>
      </tr>
      </tbody>
    </table>
  </template>
  <script>
    import router from '@/router';

    export default {
      name: 'CompanyInactiveInternshipsTable',

      data() {
        return {
          userId: sessionStorage.getItem('userId'),
          companyInactiveInternships: [
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
        getCompanyInactiveInternships: function () {
          this.$http.get("/inactive-internships", {
                params: {
                  userId: this.userId,
                }
              }
          ).then(response => {
            this.companyInactiveInternships = response.data
          }).catch(error => {
            router.push({name: 'errorRoute'})
          })
        },
        goToEditInternshipView(internshipId) {
          this.$router.push({ name: 'newOfferRoute', query: { internshipId: internshipId } })
        },

      },
      beforeMount() {
        this.getCompanyInactiveInternships()
      }
    }
  </script>