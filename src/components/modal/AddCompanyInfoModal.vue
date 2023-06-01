<template>
  <Modal ref="modalRef" close-button-name="Sulge">
    <template #header>
      Peab lisama ettevõtte andmed
    </template>
    <template #body>
      <div class="input-group mb-3">
        <input v-model="companyRequest.companyName" type="text" class="form-control" placeholder="Firma nimi"
               aria-label="Company name input">
      </div>
      <div class="input-group mb-3">
        <input v-model="companyRequest.email" type="text" class="form-control" placeholder="Kontakt e-mail"
               aria-label="Company email input">
      </div>
      <div class="input-group mb-3">
        <input v-model="companyRequest.phoneNumber" type="text" class="form-control"
               placeholder="Kontakt telefoninumber"
               aria-label="Company phonenumber input">
      </div>
    </template>
    <template #footer>
      <button @click="addCompany" type="button" class="btn btn-secondary">Salvesta</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'AddCompanyInfoModal',
  components: {Modal},
  props: {
    closeButtonName: String,
    userId: Number
  },
  data() {
    return {
      companyRequest: {
        userId: sessionStorage.getItem('userId'),
        companyName: "",
        phoneNumber: "",
        email: ""
      }
    }
  },
  methods: {
    addCompany: function () {
      this.$http.post("/company", this.companyRequest
      ).then(response => {
        router.push({name: 'customerRoute'})
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
  }
}
</script>
