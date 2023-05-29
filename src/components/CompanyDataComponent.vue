<template>
  <div class="col mt-3 text-start">
    <h3>Andmed:
      <font-awesome-icon :icon="['fas', 'user-pen']" size="xs" class="ms-5"/>
    </h3>
    <p>{{ company.companyName }}</p>
    <p>Kontakt:</p>
    <p>E-mail {{ company.email }}</p>
    <p>Telefon {{ company.phoneNumber }}</p>
    <p>Aadressid {{}}</p>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name: 'CompanyDataComponent',
  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      company: {
        companyId: 0,
        companyName: "",
        phoneNumber: "",
        email: ""
      },

    }
  },
  methods: {
    getCompany: function () {
      this.$http.get("/company", {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.company = response.data
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },

  },
  beforeMount() {
    this.getCompany()
  }
}
</script>