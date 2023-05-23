<template>
    <div class="container">
        <div class="row">
            <div class="col col-7 mt-3 text-start">
                <h1>Tere, KASUTAJANIMI</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col mt-3 text-start">
                <h3></h3>
                Kasutaja andmed:
            </div>
        </div>
        <div class="row">
            <div class="col">
                Nimi:
            </div>
        </div>
        <div class="row">
            <div class="col">
                Email:
            </div>
        </div>

        <router-link to="/internships">Vaata pakkumisi</router-link>
    </div>
    <div class="container">
        <div class="row">
            <div class="col">
                <button  @click="addCv" type="button" class="btn btn-outline-success">Lisa CV</button>
                <button  @click="addCoverLetter" type="button" class="btn btn-outline-success">Lisa motivatsioonikiri</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "internView"
}
</script>
