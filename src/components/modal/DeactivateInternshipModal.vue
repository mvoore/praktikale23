<template>
  <Modal ref="modalRef" close-button-name="Ei">
    <template #header>
      Deaktiveeri pakkumine
    </template>
    <template #body>
      Kas soovid muuta praktikapkkumist mitteaktiivseks ?
    </template>
    <template #footer>
      <button @click="deactivateInternship" type="button" class="btn btn-primary">Jah</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";
import {config} from "@fortawesome/fontawesome-svg-core";
import {useRoute} from "vue-router";

export default {
  name: 'DeactivateInternshipModal',
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

    deactivateInternship: function () {
      this.$http.delete("/delete-internship", {
        params: {
          internshipId: this.internshipId
        }
      })
          .then(response => {
            this.$refs.modalRef.closeModal()
            this.$emit('event-internship-deactivated', 'Praktikapakkumine on arhiveeritud')
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },
  }
}
</script>
