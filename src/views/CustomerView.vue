<template>
  <div class="container">
    <div class="row">
      <div class="col col-7 mt-3 text-start">
        <div>
          <div class="container">
            <div class="row">
              <div class="col mt-3 text-start">
                <h3>Andmed:
                  <font-awesome-icon :icon="['fas', 'user-pen']" size="xs" class="ms-5"/>
                </h3>
                <p>{{ company.companyName }}</p>
                <p>Kontakt:</p>
                <p>E-mail {{company.email}}</p>
                <p>Telefon {{company.phoneNumber}}</p>
                <p>Aadress</p>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col col-6">
                Minu aktiivsed pakkumised
              </div>
              <div class="col col-6">
                Minu mitteaktiivsed pakkumised
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-5 mt-5">
        Lisa uus pakkumine
        <router-link to="/new-offer">
          <font-awesome-icon :icon="['fas', 'plus']" size="xl" class="ms-2"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "CustomerView",
  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      company: {
        companyId: 0,
        companyName: "",
        phoneNumber: "",
        email: ""
      }
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
