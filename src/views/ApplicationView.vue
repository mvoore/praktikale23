<template>
  <div class="container mt-5 text-start">
    <div class="row col-6">
      <h2>Praktikale kandideerimine</h2>
      <div class="input-group mb-3 ">
        <input type="text" class="form-control" placeholder="Automaatselt ettevõtte meil" id="title">
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Sisesta nimi" id="companyName">
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Sisesta meiliaadress" id="companyName">
      </div>
      <div class="input-group">
                    <textarea class="form-control" placeholder="Tere, soovin kandideerida Teie ettevõttesse praktikale."
                              aria-label="With textarea"></textarea>
      </div>
    </div>
  </div>
  <div class="container mt-5 text-start">
    <div>
      Lisa CV
      <font-awesome-icon :icon="['fas', 'plus']" size="xl" class="ms-2"/>
      <br>
      Lisa motivatsioonikiri
      <font-awesome-icon :icon="['fas', 'plus']" size="xl" class="ms-2"/>
    </div>
    <br>
    <br>
    <div>
      <button @click="handleStartNewApplication" type="submit" class="btn btn-primary">Kandideeri</button>
    </div>
    <ApplicationModal ref="applicationModalRef"/>
  </div>


</template>

<script>
import ApplicationModal from "@/components/modal/ApplicationModal.vue";

export default {
  name: "ApplicationView",
  components: {ApplicationModal},
  methods: {
    handleStartNewApplication() {
      this.$refs.applicationModalRef.$refs.modalRef.openModal()
    },
  }

}
</script>

<style scoped>

</style>