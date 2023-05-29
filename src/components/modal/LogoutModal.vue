<template>
    <Modal ref="modalRef" close-button-name="Ei" @event-close-modal="handleCloseModal">
        <template #header>
            Leheküljelt välja logimine
        </template>
        <template #body>
            Kas soovid välja logida?
        </template>
        <template #footer>
            <button @click="executeLogout" type="button" class="btn btn-primary">Jah</button>
        </template>
    </Modal>
</template>

    <script>
    import Modal from "@/components/modal/Modal.vue";
    import router from "@/router";

    export default {
            name: 'LogoutModal',
            components: {Modal},
            methods: {
                executeLogout() {
                    sessionStorage.clear()
                    this.$refs.modalRef.closeModal()
                },
                handleCloseModal() {
                        this.$emit('event-update-nav-menu')
                        router.push({name: 'homeRoute'})

            }
        }
    }
    </script>
