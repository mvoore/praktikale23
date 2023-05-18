<template>
    <div @keydown.enter="login"  class="container">
        <div class="row justify-content-center">
            <div class="col mt-5">
                <h3>Oled jõudnud praktikapakkumiste koduleheküljele. </h3>
                <h4>Edasiseks palun logi sisse.</h4>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-2">
                <div class="mb-2 mt-5">
                    <label for="username" class="form-label">Kasutajanimi</label>
                    <input v-model="username" class="form-control" id="username">
                </div>
                <div class="mb-2">
                    <label for="password" class="form-label">Parool</label>
                    <input v-model="password" type="password" class="form-control" id="password">
                </div>
                <button @click="login" type="submit" class="btn btn-primary">Logi sisse</button>
            </div>
        </div>
        <div class="row">
            <div class="col mt-3">
                <router-link to="/register">Loo uus kasutaja</router-link>
            </div>
        </div>
    </div>
</template>


<script>


import router from "@/router";

export default {
    name: 'HomeView',

    data() {
        return {
            username: '',
            password: '',
            message: '',
            loginResponse: {
                userId: 0,
                roleName: ''
            },
            errorResponse: {
                message: '',
                errorCode: 0

            }
        }
    },
    methods: {
        login() {
            this.message = ''
            if (this.username === '' || this.password === '') {
                this.message = 'Täida kõik väljad'
            } else {
                this.sendLoginRequest();
            }
        },
        sendLoginRequest() {
            this.$http.get("/login", {
                    params: {
                        username: this.username,
                        password: this.password
                    },
                }
            ).then(response => {
                this.loginResponse = response.data
                sessionStorage.setItem('userId', this.loginResponse.userId)
                sessionStorage.setItem('roleName', this.loginResponse.roleName)
                this.$emit('event-update-nav-menu')

                if (this.loginResponse.roleName === 'intern') {
                    router.push({name: 'internRoute'});

                } else if (this.loginResponse.roleName === 'customer') {
                    router.push({name: 'customerRoute'});
                } else {
                    router.push({name: 'adminRoute'})
                }
            }).catch(error => {
                this.errorResponse = error.response.data
                if (this.errorResponse.errorCode === 500) {
                    this.message = this.errorResponse.message
                } else {
                    router.push({name: 'errorRoute'})
                }
            })
        },
    }
}


</script>
