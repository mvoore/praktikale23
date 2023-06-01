<template>
  <div class="col mt-3 text-start">
    <h3><strong>Andmed</strong>
      <span class="hoverable-icon" v-on:click="handleEditCompanyInfo" style="margin-left: 20px">
         <font-awesome-icon :icon="['far', 'pen-to-square']"/>
      </span>
      :
    </h3>
    <CompanyInfoModal ref="companyInfoModalRef"/>
    <p>{{ company.companyName }}</p>
    <p><strong>Kontakt:</strong></p>
    <p>E-mail {{ company.email }}</p>
    <p>Telefon {{ company.phoneNumber }}</p>
    <p><strong>Aadressid</strong>
      <span class="hoverable-icon" v-on:click="handleAddNewAddress" style="margin-left: 10px">
      <font-awesome-icon :icon="['fas', 'plus']"/>
      </span>
      <AddressModal ref="addressModalRef"/>
      :
      <ul v-for="companyAddress in companyAddresses" :key="companyAddress.addressId">
        <li>{{ companyAddress.street }}, {{ companyAddress.streetNumber }}, {{ companyAddress.cityName }},
          {{ companyAddress.postalCode }}, {{ companyAddress.regionName }}
        </li>
      </ul>
    </p>

  </div>
</template>
<script>
import router from "@/router";
import CompanyInfoModal from "@/components/modal/CompanyInfoModal.vue";
import AddressModal from "@/components/modal/AddressModal.vue";

export default {
  name: 'CompanyDataComponent',
  components: {AddressModal, CompanyInfoModal},

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
      ],
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
        if (this.companyAddresses.length === 0) {
          this.companyAddresses = []
          console.log("No company addresses to display");
        } else {
          this.companyAddresses = response.data
        }
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
    handleAddNewAddress() {
      this.$refs.addressModalRef.$refs.modalRef.openModal()
    },
    handleEditCompanyInfo() {
      this.$refs.companyInfoModalRef.$refs.modalRef.openModal()
    },


  },
  mounted() {
    this.getCompany();
    this.getCompanyAddresses()
  }
}
</script>