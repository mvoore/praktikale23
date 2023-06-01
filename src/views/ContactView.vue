<template>
  <nav>
    <router-link to="/">
      <font-awesome-icon :icon="['fas', 'house-fire']" class="hoverable-icon"/>
    </router-link>
  </nav>
  <div class="container mb-5">
    <br>
    <div class="row">
      <div class="col mb-3">
        <h2>Kontakt</h2>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col mb-3">
        ValiIT Praktikale23
      </div>
    </div>
  </div>


  <div class="container">
    <div class="row">
      <div class="col">
        <p>Merit/Malle/Miisi</p>
        <p>Aadress: Aia 7, Tallinn</p>
        <p>Praktika otsija klienditugi +372 000 0000</p>
        <p>Praktika pakkuja klienditugi +372 000 0001</p>
        <p>info@praktikale.ee</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView"
}
</script>

<style scoped>

</style>