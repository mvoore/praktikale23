<template>
    <div class="container">
        <div class="col">
            <AlertDanger v-if="errorMessage" :message="errorMessage"/>
        </div>
        <div class="row justify-content-center">
            <div class="col mt-5">
                <h3>Registreeri ennast siin: </h3>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-2">
                <div class="mb-2 mt-5">
                    <label for="username" class="form-label">Sisesta kasutajanimi</label>
                    <input v-model="newUserRequest.username" class="form-control" id="username">
                </div>
                <div class="mb-2">
                    <label for="password" class="form-label">Parool</label>
                    <input v-model="newUserRequest.password" type="password" class="form-control" id="password">
                </div>
                <div class="mb-2">
                    <label for="passwordReType" class="form-label">Parool uuesti</label>
                    <input v-model="passwordReType" type="password" class="form-control" id="passwordReType">
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="role" id="3" value="3"
                           v-model="newUserRequest.roleId">
                    <label class="form-check-label">
                        Olen praktika otsija
                    </label>
                </div>
                <div class="form-check mb-5">
                    <input class="form-check-input" type="radio" name="role" id="2" value="2"
                           v-model="newUserRequest.roleId">
                    <label class="form-check-label">
                        Olen praktika pakkuja
                    </label>
                </div>


                <button @click="addNewUser" type="submit" class="btn btn-primary">Registreeri</button>
            </div>
        </div>
        <div class="row">

        </div>
    </div>
</template>

<script>
import router from "@/router";
import AlertDanger from "@/components/alert/AlertDanger.vue";

export default {
    name: "SignUpView",
    components: {AlertDanger},

    data() {
        return {
            passwordReType: '',
            newUserRequest: {
                username: '',
                password: '',
                roleId: '',
            },
            errorMessage:''
        }
    },
    methods: {
        addNewUser: function () {
            if (!this.newUserRequest.username|| !this.newUserRequest.password || !this.newUserRequest.roleId) {
                this.errorMessage = 'Palun täida kõik väljad!'
                return
            }

            this.$http.post("/signup", this.newUserRequest
            ).then(response => {
                const responseBody = response.data
                router.push({name: 'homeRoute'})
            }).catch(error => {
                const errorResponseBody = error.response.data
                router.push({name: 'errorRoute'})
            })
        }

    }


}
</script>
