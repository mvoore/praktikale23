<template>
    <div class="container">
        <div class="row">
            <div class="col col-7 mt-3 text-start">
                <h2 id="username">Tere, {{ username }}</h2>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col col-7 mt-3 text-start">
                <router-link to="/internships">
                    <button type="button" class="btn btn-outline-primary">Vaata praktika pakkumisi</button>
                </router-link>
            </div>
        </div>
    </div>

    <div class="container mt-5">
        <div class="row">
            <div class="col mt-3 text-start">
                <h4>Andmed:
                    <font-awesome-icon :icon="['fas', 'user-pen']" size="xs" class="ms-5"/>
                </h4>
                <p>Nimi:</p>
                <p>Email:</p>
            </div>
            <div class=" mt-3 text-start">
                Lisa CV
                <font-awesome-icon :icon="['fas', 'plus']" size="xl" class="ms-2"/>
                <br>
                Lisa motivatsioonikiri
                <font-awesome-icon :icon="['fas', 'plus']" size="xl" class="ms-2"/>
            </div>
        </div>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col col-6 text-start">
                Minu praktika kandideerimised:
                <br>
                <br>
                <p> Esimene pakkumine</p>
                <p> Teine pakkumine</p>
            </div>
        </div>
    </div>
  <!--    <button @click="addCv" type="button" class="btn btn-outline-success">Lisa CV</button>-->
  <!--    <button @click="addCoverLetter" type="button" class="btn btn-outline-success">Lisa motivatsioonikiri</button>-->

</template>

<script>
export default {
    name: "internView"
}
</script>
