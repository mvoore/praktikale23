<template>
    <div class="container">
        <div class="row">
            <div class="col col-7 mt-3 text-start">
                <h2 id="username">Tere, {{ internContact.username }}</h2>
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
            <div class="col col-4 mt-3 text-start">
                <h4>Andmed:
                    <font-awesome-icon :icon="['fas', 'user-pen']" size="xs" class="ms-5"/>
                </h4>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Nimi</span>
                    <input v-model="internContact.fullName" type="text" class="form-control"  >
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Email</span>
                    <input v-model="internContact.email" type="text" class="form-control" >
                </div>
                <div>
                    <button @click="" type="submit" class="btn btn-outline-primary btn-sm">Salvesta nimi ja email</button>
                </div>
            </div>
            <div class=" mt-3 text-start">
                <div>
                    <label for="cv">Lisa CV:</label>
                    <br>
                    <CvInput @event-emit-base64="setFileData"/>
                    <button @click="addCv" type="submit" class="btn btn-outline-primary btn-sm text-end">Salvesta CV
                    </button>

                </div>
                <br>
                <br>
                <div>
                    <label for="coverletter">Lisa motivatsioonikiri:</label>
                    <br>
                    <CoverletterInput @event-emit-base64="setCoverletterFileData"/>

                    <button @click="addCoverletter" type="submit" class="btn btn-outline-primary btn-sm">Salvesta motivatsioonikiri</button>
                </div>
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
import CvInput from "@/components/CvCoverletter/CvInput.vue";
import CoverletterInput from "@/components/CvCoverletter/CoverletterInput.vue";
import router from "@/router";

export default {
    name: "internView",
    components: {
        CvInput,
        CoverletterInput
    },

    data() {
        return {
            userId: sessionStorage.getItem('userId'),
            internContact: {
                username: '',
                fullName: '',
                email: ''
            },
            newCv: {
                title: '',
                fileData: ''
            },
            newCoverletter: {
                title:'',
                fileData:''
            }
        }
    },
    methods: {
        addCv: function () {
            this.$http.post("/intern/cv", this.newCv, {
                    params: {
                        userId: this.userId
                    }
                }
            ).then(response => {
                this.newCv = response.data

            }).catch(error => {
                const errorResponseBody = error.response.data
            })
        },
        setFileData(fileData) {
            this.newCv.fileData = fileData

        },
        addCoverletter: function () {
            this.$http.post("/intern/coverletter", this.newCoverletter, {
                    params: {
                        userId: this.userId
                    }
                }
            ).then(response => {
               this.newCoverletter =response.data

            }).catch(error => {
                const errorResponseBody = error.response.data
            })
        },
        setCoverletterFileData(fileData){
            this.newCoverletter.fileData= fileData
        },
        getInternContact: function () {
            this.$http.get("/intern", {
                    params: {
                        userId: this.userId
                    }
                }
            ).then(response => {
                this.internContact = response.data
            }).catch(error => {
                const errorResponseBody = error.response.data
            })
        },
    },
}

</script>
