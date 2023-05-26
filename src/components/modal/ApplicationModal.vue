<template>
  <Modal ref="modalRef" close-button-name="Sulge">
    <template #header>
      Aitäh!
    </template>
    <template #body>
      Sinu kandideerimise avaldus on saadetud.
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
  methods:{
    ApplicationAdded() {
      sessionStorage.clear()
      this.$refs.modalRef.closeModal()
      this.$emit('event-update-nav-menu')
      router.push({name: 'homeRoute'})
    },
  }
}
</script>

