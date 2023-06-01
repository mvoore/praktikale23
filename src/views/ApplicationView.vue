<template>
    <div class="container mt-5 text-start">
        <div class="row col-6">
            <h2>Praktikale kandideerimine</h2>
            <div class="input-group mb-3 ">
                <p style="font-weight: bold; font-size: larger;">E-mail: {{ detailsFromInternship.companyEmail }}</p>

            </div>
            <div class="input-group mb-3">
                <input v-model="addApplication.fullName" type="text" class="form-control" placeholder="Sisesta nimi" id="Intern Name">
            </div>
            <div class="input-group mb-3">
                <input v-model="addApplication.email" type="text" class="form-control" placeholder="Sisesta meiliaadress" id="companyName">
            </div>
            <div class="input-group">
                    <textarea v-model="addApplication.message" class="form-control" placeholder="Tere, soovin kandideerida Teie ettevõttesse praktikale."
                              aria-label="With textarea"></textarea>
            </div>
        </div>
    </div>
    <div class="container mt-5 text-start">
        <div>

            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    Vali CV
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button class="dropdown-item" type="button">CV1</button></li>
                    <li><button class="dropdown-item" type="button">CV2</button></li>
                    <li><button class="dropdown-item" type="button">CV3</button></li>
                </ul>
            </div>

            <br>
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Vali motivatsioonikiri
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button class="dropdown-item" type="button">Motivatsioonikiri 1</button></li>
                <li><button class="dropdown-item" type="button">Motivatsioonikiri 2</button></li>
                <li><button class="dropdown-item" type="button">Motivatsioonikiri 3</button></li>
            </ul>

        </div>
        <br>
        <br>
        <div>
            <button @click="addNewApplication" type="submit" class="btn btn-primary">Kandideeri</button>
        </div>
        <ApplicationModal ref="applicationModalRef"/>
    </div>


</template>

<script>
import ApplicationModal from "@/components/modal/ApplicationModal.vue";
import {useRoute} from "vue-router";

export default {
    name: "ApplicationView",
    components: {ApplicationModal},
    data() {
        return {
            internshipId: Number(useRoute().query.internshipId),
            detailsFromInternship: {
                internshipId: 0,
                companyEmail: ''
            },
            addApplication:
                {
                    internshipId: 0,
                    userId: sessionStorage.getItem('userId'),
                    email: '',
                    fullName: '',
                    message: ''
                }
        }
    },
    methods: {

        getCompanyEmail: function () {
            this.$http.get("/application", {
                    params: {
                        internshipId: this.internshipId,
                    }
                }
            ).then(response => {
                this.detailsFromInternship = response.data

            }).catch(error => {
                const errorResponseBody = error.response.data
            })
        },
        addNewApplication: function () {
            this.$http.post("/intern/add-application", this.addApplication, {
                    params: {
                        userId: this.userId,
                        internshipId: this.internshipId,
                    }
                }
            ).then(response => {
                this.addApplication = response.data
                this.handleStartNewApplication();
            }).catch(error => {
                const errorResponseBody = error.response.data
            })
        },


        handleStartNewApplication() {
            this.$refs.applicationModalRef.$refs.modalRef.openModal()
        },
    },
    mounted() {
        this.addApplication.internshipId = this.internshipId;
        this.getCompanyEmail();
    },

}
</script>
