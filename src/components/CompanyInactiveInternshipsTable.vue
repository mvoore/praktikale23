<template>
  <ActivateInternshipModal ref="activateInternshipModalRef"
                           @event-internship-activated="refreshCompanyInactiveInternships"></ActivateInternshipModal>
  <table class="table table-dark table-hover">
    <thead>
    <tr>
      <th scope="col">Valdkond</th>
      <th scope="col">Ametikoht</th>
      <th scope="col">Lisamise kuupäev</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="internship in companyInactiveInternships" :key="internship.internshipId">
      <td>{{ internship.categoryName }}</td>
      <td>{{ internship.title }}</td>
      <td>{{ internship.dateAdded }}</td>
      <td>
        <font-awesome-icon @click="openActivateInternshipModal(internship.internshipId)" class="hoverable-icon"
                           :icon="['far', 'square-plus']"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
import router from '@/router';
import ActivateInternshipModal from "@/components/modal/ActivateInternshipModal.vue";

export default {
  name: 'CompanyInactiveInternshipsTable',
  components: {ActivateInternshipModal},

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
    openActivateInternshipModal(internshipId) {
      this.$refs.activateInternshipModalRef.setInternshipId(internshipId)
      this.$refs.activateInternshipModalRef.$refs.modalRef.openModal(internshipId)
    },

    refreshCompanyInactiveInternships(messageFromChild) {
      this.getCompanyInactiveInternships()
      this.$emit('event-refreshed-company-inactive-internships', messageFromChild)
    },

  },
  beforeMount() {
    this.getCompanyInactiveInternships()
  },
  mounted() {
    this.companyInactiveInternships.internshipId = this.internshipId;
  }

}
</script>