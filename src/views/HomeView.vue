<template>
  <div @keydown.enter="login" class="container">
    <AlertDanger :message="message"/>
    <div class="row justify-content-center">
      <div class="col mt-5">
        <div class="mb-5"><h3>Oled jõudnud praktikapakkumiste koduleheküljele. </h3>
        </div>
        <h4>Lehe kasutamiseks palume sisse logida.</h4>
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
    <div v-if="!userHasCompany">
<!--      <p>Palun lisa firma info.</p>-->
<!--      <button @click="handleEditCompanyInfo"></button>-->
    </div>
    <div class="row">
      <div class="col mt-3">
        <router-link to="/signup">Loo uus kasutaja</router-link>
      </div>
    </div>
  </div>
  <CompanyInfoModal ref="companyInfoModalRef"/>
</template>


<script>


import router from "@/router";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import CompanyInfoModal from "@/components/modal/CompanyInfoModal.vue";

export default {
  name: 'HomeView',
  components: {CompanyInfoModal, AlertDanger},

  data() {
    return {
      userHasCompany: false,
      username: '',
      password: '',
      message: '',
      loginResponse: {
        userId: 0,
        companyId: 0,
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
        this.message = 'Täida palun kõik väljad'
      } else {
        this.sendLoginRequest();
      }
    },
    pushToRole: function () {
      if (this.loginResponse.roleName === 'intern') {
        router.push({name: 'internRoute'});

      } else if (this.loginResponse.roleName === 'customer') {
        router.push({name: 'customerRoute'});
      } else {
        router.push({name: 'adminRoute'})
      }
    }, sendLoginRequest() {
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


        if (this.loginResponse.companyId === 0 && this.loginResponse.roleName === 'customer') {
          this.$refs.companyInfoModalRef.$refs.modalRef.openModal()
        } else {
          this.$emit('event-update-nav-menu');
          this.pushToRole();
        }

      }).catch(error => {
        this.errorResponse = error.response.data
        router.push({name: 'errorRoute'})
      })
    },
  }
}


</script>
