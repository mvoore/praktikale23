<template>
  <div class="col mt-3 text-start">
    <h3>Andmed:
      <font-awesome-icon :icon="['fas', 'user-pen']" size="xs" class="ms-5"/>
    </h3>
    <p>{{ company.companyName }}</p>
    <p>Kontakt:</p>
    <p>E-mail {{ company.email }}</p>
    <p>Telefon {{ company.phoneNumber }}</p>
    <p>Aadressid:
      <ul v-for="companyAddress in companyAddresses" :key="companyAddress.addressId">
        <li>{{ companyAddress.street }}, {{ companyAddress.streetNumber }}, {{ companyAddress.cityName }}, {{companyAddress.postalCode }}, {{ companyAddress.regionName }}</li>
      </ul>
    </p>

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
      companyAddresses: [
        {
          addressId: 0,
          regionName: "",
          cityName: "",
          street: "",
          streetNumber: 0,
          postalCode: 0,
        }
      ]
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
    getCompanyAddresses: function () {
      this.$http.get("/address/company-addresses", {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.companyAddresses = response.data
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },

  },
  beforeMount() {
    this.getCompany();
        this.getCompanyAddresses()
  }
}
</script>