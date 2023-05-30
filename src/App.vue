<head>
<link rel="stylesheet" href="src/assets/my-style.css">
</head>
<template>
    <nav class=" justify-content-center">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/intern">Intern Home</router-link>
        |
        <router-link to="/internships">Praktika pakkumised</router-link>
        |
        <router-link to="/customer">Pakkuja Home</router-link>
        |
        <router-link to="/application">Kandideerimine Home</router-link>
        |
        <router-link to="/new-offer">Praktika lisamine</router-link>
        |
        <router-link to="" @click="handleLogout">Logi välja</router-link>
    </nav>
    <LogoutModal ref="logoutModalRef" @event-update-nav-menu="updateNavMenu"/>

  <!--    <nav class=" justify-content-center">-->
  <!--        <router-link to="/kkk">KKK</router-link> |-->
  <!--        <router-link to="/contact">Kontakt</router-link>-->
  <!--    </nav>-->
    <router-view @event-update-nav-menu="updateNavMenu"/>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import LogoutModal from "@/components/modal/LogoutModal.vue";

export default {
    components: {LogoutModal, Modal},
    data() {
        return {
            roleId: sessionStorage.getItem('roleId')
        }
    },
    methods: {
        updateNavMenu() {
            this.roleId = sessionStorage.getItem('roleId')
        },
        handleLogout() {
            this.$refs.logoutModalRef.$refs.modalRef.openModal()
        },
    }
}
</script>

