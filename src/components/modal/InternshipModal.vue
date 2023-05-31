<template>
    <Modal ref="modalRef" close-button-name="Sulge">
        <template #header>
            Praktikapakkumise info
        </template>
        <template #body>
            <div class="row">
                <div class="col text-start" id="title">
                    <td>Otsime: {{ internshipOffer.title }}</td>
                </div>
            </div>
            <div class="row">
                <div class="col text-start">
                    <td>Praktika asukoht: {{ internshipOffer.address }}</td>
                </div>
            </div>
            <div class="row">
                <div class="col text-start">
                    <td>Info: {{ internshipOffer.description }}</td>
                </div>
            </div>
            <div class="col">
                <div class="internship-image">
                    <InternshipImage :image-data="internshipOffer.imageData"/>
                </div>
            </div>
        </template>
        <template #footer>
            <button @click="ApplyToInternship" type="button" class="btn btn-primary">Kandideeri!</button>
        </template>
    </Modal>
</template>
<script>
import Modal from "@/components/modal/Modal.vue";
import InternshipImage from "@/components/InternshipImage.vue";
import ApplicationModal from "@/components/modal/ApplicationModal.vue";
import router from "@/router";

export default {
    name: 'InternshipModal',
    components: {ApplicationModal, InternshipImage, Modal},
    data() {
        return {
            internshipId: 0,
            internshipOffer: {
                addressId: 0,
                title: '',
                categoryId: 0,
                description: '',
                imageData: '',
            },
        };
    },
    methods: {

        setInternshipId(internshipId) {
            this.internshipId = internshipId;
        },
        getInternshipOffer: function () {
            this.$http.get("/offer", {
                    params: {
                        internshipId: this.internshipId,
                    },
                })
                .then((response) => {
                    this.internshipOffer = response.data
                    this.$refs.modalRef.openModal()
                })
                .catch((error) => {
                    const errorResponseBody = error.response.data;
                });
        },
        ApplyToInternship(){
            router.push({name: 'applicationRoute', query: {internshipId: this.internshipId}})

        },

    },

    mounted() {
        this.getInternshipOffer();
    },
}


</script>

