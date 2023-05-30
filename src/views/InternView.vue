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
                    <button type="button" class="btn btn-outline-primary">Vaata kõiki praktika pakkumisi</button>
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
                <div>
                    <label for="cv">Lisa CV:</label>
                    <br>
                    <CvInput @event-emit-base64=""/>
                    <button type="submit" class="btn btn-outline-primary btn-sm text-end">Salvesta CV</button>

                </div>
                <br>
                <br>
                <div>
                    <label for="coverletter">Lisa motivatsioonikiri:</label>
                    <br>
                    <CoverletterInput @event-emit-base64=""/>
                    <button type="submit" class="btn btn-outline-primary btn-sm">Salvesta motivatsioonikiri</button>
                </div>
            </div>
        </div>
        <router-link to="/internships">Vaata praktika pakkumisi</router-link>
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
import CvInput from "@/components/CvInput.vue";
import CoverletterInput from "@/components/CoverletterInput.vue";

export default {
    name: "internView",
    components: {
        CvInput,
        CoverletterInput
    }
}


</script>
