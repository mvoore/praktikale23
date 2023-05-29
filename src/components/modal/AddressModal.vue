<template>
  <Modal ref="modalRef" close-button-name="Sulge">
    <template #header>
      Lisa aadress
    </template>
    <template #body>
      <AddressInput/>
    </template>
    <template #footer>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";
import AddressInput from "@/components/AddressInput.vue";

export default {
  name: 'AddressModal',
  components: {AddressInput, Modal},
  methods: {
    ApplicationAdded() {
      this.$refs.modalRef.closeModal()
      this.$emit('event-update-nav-menu')
      router.push({name: 'homeRoute'})
    },
  }
}
</script>

