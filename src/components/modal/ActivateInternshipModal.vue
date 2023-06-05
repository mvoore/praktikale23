<template>
  <Modal ref="modalRef" close-button-name="Ei">
    <template #header>
      Aktiveeri pakkumine
    </template>
    <template #body>
      Kas soovid muuta praktikapkkumise aktiivseks ?
    </template>
    <template #footer>
      <button @click="activateInternship" type="button" class="btn btn-primary">Jah</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: 'ActivateInternshipModal',
  components: {Modal},

  data() {
    return {
      internshipId: 0
    }
  },
  methods: {
    setInternshipId(internshipId) {
      this.internshipId = internshipId;
    },


    activateInternship: function () {
      this.$http.put("/activate-internship", null, {
            params: {
              internshipId: this.internshipId,
            }
          }
      ).then(response => {
        this.$refs.modalRef.closeModal()
        this.$emit('event-internship-activated', 'Praktikapakkumine on taastatud')
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    },
  }
}
</script>