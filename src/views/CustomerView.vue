<template>
  <div class="container">
    <div class="row">
      <div class="col col-7 mt-3 text-start">
        <h1>Tere, KASUTAJANIMI</h1>
        <div>
          <div class="container">
            <div class="row">
              <div class="col mt-3 text-start">
                <h3>Andmed:
                  <font-awesome-icon :icon="['fas', 'user-pen']" size="xs" class="ms-5"/>
                </h3>
                <p>Ettevõtte nimi</p>
                <p>Kontakt:</p>
                <p>E-mail</p>
                <p>Telefon</p>
                <p>Aadress</p>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col col-6">
                Minu aktiivsed pakkumised
              </div>
              <div class="col col-6">
                Minu mitteaktiivsed pakkumised
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-5 mt-5">
          <router-link to="/new-offer">Lisa uus pakkumine</router-link>
        <font-awesome-icon :icon="['fas', 'plus']" size="xl" class="ms-2"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerView"
}
</script>
