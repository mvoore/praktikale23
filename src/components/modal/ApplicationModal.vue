<template>
  <Modal ref="modalRef" close-button-name="Tagasi">
    <template #header>
      Kandideerimise avalduse esitamine.
    </template>
    <template #body>
      Oled kindel, et soovid avalduse esitada?
    </template>
    <template #footer>
      <button @click="ApplicationAdded" type="button" class="btn btn-primary">Jah</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'ApplicationModal',
  components: {Modal},
  methods: {
    ApplicationAdded() {
      this.$refs.modalRef.closeModal()
      this.$emit('event-update-nav-menu')
      router.push({name: 'internshipsRoute'})
    },
  }
}
</script>

