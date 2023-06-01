<template>
  <DeactivateInternshipModal ref="deactivateInternshipModalRef"
                             @event-internship-deactivated="refreshCompanyActiveInternships"></DeactivateInternshipModal>
  <table class="table table-dark table-hover">
    <thead>
    <tr>
      <th scope="col">Valdkond</th>
      <th scope="col">Ametikoht</th>
      <th scope="col">Lisamise kuupäev</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="internship in companyActiveInternships" :key="internship.internshipId">
      <td>{{ internship.categoryName }}</td>
      <td>{{ internship.title }}</td>
      <td>{{ internship.dateAdded }}</td>
      <td>
        <font-awesome-icon @click="goToEditInternshipView(internship.internshipId)" class="hoverable-icon"
                           :icon="['far', 'pen-to-square']"/>
      </td>
      <td>
        <font-awesome-icon @click="openDeactivateInternshipModal(internship.internshipId)" class="hoverable-icon"
                           :icon="['fas', 'trash-can']"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import router from '@/router';
import DeactivateInternshipModal from "@/components/modal/DeactivateInternshipModal.vue";

export default {
  name: 'CompanyActiveInternshipsTable',
  components: {DeactivateInternshipModal},

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
      this.$router.push({name: 'newOfferRoute', query: {internshipId: internshipId}})
    },
    openDeactivateInternshipModal(internshipId) {
      this.$refs.deactivateInternshipModalRef.setInternshipId(internshipId)
      this.$refs.deactivateInternshipModalRef.$refs.modalRef.openModal(internshipId)
    },
    refreshCompanyActiveInternships(messageFromChild) {
      this.getCompanyActiveInternships()
      this.$emit('event-refreshed-company-active-internships', messageFromChild)
    },

  },
  beforeMount() {
    this.getCompanyActiveInternships()
  }
}
</script>
