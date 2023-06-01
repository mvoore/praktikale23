<template>
  <AlertSuccess :message="successMessage"></AlertSuccess>
  <div class="col mt-3 text-start">
    <h3><strong>Andmed</strong>
      <span class="hoverable-icon" v-on:click="handleEditCompanyInfo" style="margin-left: 20px">
         <font-awesome-icon :icon="['far', 'pen-to-square']"/>
      </span>
      :
    </h3>
    <EditCompanyInfoModal ref="editCompanyInfoModalRef" :company-id="company.companyId"
                          @event-company-info-changed="refreshCompanyDataComponent"/>
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
import EditCompanyInfoModal from "@/components/modal/EditCompanyInfoModal.vue";
import AddressModal from "@/components/modal/AddressModal.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";

export default {
  name: 'CompanyDataComponent',
  components: {AlertSuccess, AddressModal, EditCompanyInfoModal},

  data() {
    return {
      successMessage: '',
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
    clearAlertMessages() {
      this.successMessage = ''
    },
    getCompany: function () {
      this.clearAlertMessages()
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
      this.$refs.editCompanyInfoModalRef.$refs.modalRef.openModal()
    },
    refreshCompanyDataComponent(messageFromChild) {
      this.getCompany()
      this.$emit('event-refresh-company-data-component', messageFromChild)
    },
  },
  mounted() {
    this.getCompany();
    this.getCompanyAddresses()
  }
}
</script>