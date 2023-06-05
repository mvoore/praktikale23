<template>
  <Modal ref="modalRef" close-button-name="Sulge">
    <template #header>
      Muuda oma ettevõtte andmeid
    </template>
    <template #body>
      <div class="input-group mb-3">
        <input v-model="companyRequest.companyName" type="text" class="form-control" placeholder=""
               aria-label="Company name input">
      </div>
      <div class="input-group mb-3">
        <input v-model="companyRequest.email" type="text" class="form-control" placeholder=""
               aria-label="Company email input">
      </div>
      <div class="input-group mb-3">
        <input v-model="companyRequest.phoneNumber" type="text" class="form-control" placeholder=""
               aria-label="Company phonenumber input">
      </div>
    </template>
    <template #footer>
      <button @click="editCompany" type="button" class="btn btn-secondary">Muuda</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'EditCompanyInfoModal',
  components: {Modal},
  props: {
    closeButtonName: String,
    companyId: Number
  },
  data() {
    return {
      successMessage: '',
      userId: sessionStorage.getItem('userId'),
      companyRequest: {
        companyName: "",
        phoneNumber: "",
        email: ""
      }
    }
  },
  methods: {
    clearAlertMessages() {
      this.successMessage = ''
    },
    getCompany: function () {
      this.$http.get("/company", {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.companyRequest = response.data
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },

    editCompany: function () {
      this.$http.put("/company", this.companyRequest, {
            params: {
              companyId: this.companyId,
            }
          }
      ).then(response => {
        this.$refs.modalRef.closeModal()
        this.$emit('event-company-info-changed', 'Ettevõte info on muudetud.')
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
  },

  mounted() {
    this.getCompany()
  }
}
</script>
