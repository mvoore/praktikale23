<template>
    <nav v-if="roleName === null"> </nav>
  <nav v-else class=" justify-content-center">
<template v-if="roleName === 'intern'">
    <router-link to="/">Esileht</router-link>
    |
    <router-link to="/intern">Minu andmed</router-link>
    |
    <router-link to="/internships">Praktika pakkumised</router-link>
    |
    <router-link to="" @click="handleLogout">Välja logimine</router-link>
</template>

<template v-else-if="roleName === 'customer'">
    <router-link to="/">Esileht</router-link>
    |
    <router-link to="/customer">Ettevõtte andmed</router-link>
    |
    <router-link to="/new-offer">Praktika lisamine</router-link>
    |
    <router-link to="" @click="handleLogout">Välja logimine</router-link>
</template>

<template v-else>
    <router-link to="/">Esileht</router-link>
    |
    <router-link to="/intern">Minu andmed(intern)</router-link>
    |
    <router-link to="/internships">Praktika pakkumised</router-link>
    |
    <router-link to="/customer">Ettevõtte andmed</router-link>
    |
    <router-link to="/application">Kandideerimine</router-link>
    |
    <router-link to="/new-offer">Praktika lisamine</router-link>
    |
    <router-link to="" @click="handleLogout">Välja logimine</router-link>
</template>
  </nav>
  <nav class="footermenu justify-content-center">
    <router-link to="/kkk">KKK</router-link> |
    <router-link to="/contact">Kontakt</router-link>
  </nav>
  <LogoutModal ref="logoutModalRef" @event-update-nav-menu="updateNavMenu"/>

  <router-view @event-update-nav-menu="updateNavMenu"/>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import LogoutModal from "@/components/modal/LogoutModal.vue";

export default {
  components: {LogoutModal, Modal},
  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      roleName: sessionStorage.getItem('roleName')
    }
  },
  methods: {
    updateNavMenu() {
      this.userId = sessionStorage.getItem('userId')
      this.roleName = sessionStorage.getItem('roleName')
    },
    handleLogout() {
      this.$refs.logoutModalRef.$refs.modalRef.openModal()
    },
  }
}
</script>