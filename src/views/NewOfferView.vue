<template>

    <div class="container">
        <div class="row">
            <div class="col col-7 mt-3 text-start">
                <h2>{{ pageTitle }}</h2>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="mt-3 text-start col-8 ">

                <div class="input-group mb-3 ">
                    <input v-model="internshipOffer.title" type="text" class="form-control"
                           placeholder="Praktikakoha pealkiri" id="title">
                </div>
                <AddressesDropdown ref="addressDropdownRef" @event-emit-selected-address-id="setAddressId"/>

                <p>
                    <button @click="handleAddNewAddress" type="button" class="btn btn-primary">Lisa uus aadress</button>
                </p>
                <AddressModal ref="addressModalRef"/>

                <div class="col mb-3 mt-3">
                    <CategoriesDropdown ref="categoriesDropdownRef" @event-emit-selected-category-id="setCategoryId"/>
                </div>

                <div class="input-group">
                    <textarea v-model="internshipOffer.description" class="form-control"
                              placeholder="Praktikakoha kirjeldus/info"
                              id="description" aria-label="With textarea" rows="10" cols="50"></textarea>
                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                    <button class="btn btn-primary me-md-2" type="button" @click="goToCustomerView">
                        Tagasi profiilile
                    </button>
                    <button v-if="isEdit" @click="editInternship" type="button" class="btn btn-outline-success">Muuda
                    </button>
                    <button v-else @click="addInternship" class="btn btn-primary" type="button">Salvesta</button>
                </div>

            </div>
            <div class="col">
                <div class="internship-image">
                    <InternshipImage :image-data="internshipOffer.imageData"/>
                </div>

                <div>
                    <ImageInput  @event-emit-image-data="setImageData"/>
                </div>
            </div>

        </div>

    </div>


</template>

<script>


import router from "@/router";
import CategoriesDropdown from "@/components/CategoriesDropdown.vue";
import AddressesDropdown from "@/components/AddressesDropdown.vue";
import AddressModal from "@/components/modal/AddressModal.vue";
import {useRoute} from "vue-router";
import ImageInput from "@/components/ImageInput.vue";
import InternshipImage from "@/components/InternshipImage.vue";

export default {
    name: "NewOfferView",
    components: {InternshipImage, ImageInput, AddressModal, AddressesDropdown, CategoriesDropdown},

    data() {
        return {
            pageTitle: 'Lisa praktika pakkumine',

            selectedCategoryId: 0,
            selectedAddressId: 0,
            isEdit: false,
            internshipId: Number(useRoute().query.internshipId),
            internshipOffer: {
                userId: sessionStorage.getItem('userId'),
                addressId: 0,
                title: '',
                categoryId: 0,
                description: '',
                imageData: ''


            }
        }
    },
    methods: {
        addInternship: function () {
            if(this.isEdit){
                this.editInternship()
            }else{
                this.$http.post("/new-offer", this.internshipOffer
            ).then(response => {
                router.push({name: 'customerRoute'})

            }).catch(error => {
                router.push({name: 'errorRoute'})

            })
            }
        },
        setCategoryId(selectedCategoryId) {
            this.internshipOffer.categoryId = selectedCategoryId
        },

        setAddressId(selectedAddressId) {
            this.internshipOffer.addressId = selectedAddressId
        },
        setImageData(imageData) {
            this.internshipOffer.imageData = imageData
        },

        handleAddNewAddress() {
            this.$refs.addressModalRef.$refs.modalRef.openModal()
        },
        goToCustomerView() {
            this.$router.push('customer')
        },

        getInternshipOffer: function () {
            this.$http.get("/offer", {
                    params: {
                        internshipId: this.internshipId
                    }
                }
            ).then(response => {
                this.internshipOffer = response.data
                this.$refs.categoriesDropdownRef.setSelectedCategoryId(this.internshipOffer.categoryId)
                this.$refs.addressDropdownRef.setSelectedAddressId(this.internshipOffer.addressId)
            }).catch(error => {
                const errorResponseBody = error.response.data
            })
        },

        editInternship: function () {
            this.$http.put("/edit-internship", this.internshipOffer, {
                    params: {
                        internshipId: this.internshipId,
                    }
                }
            ).then(response => {
                router.push({name:'customerRoute'})
            }).catch(error => {
                const errorResponseBody = error.response.data
            })


        },

    },
    mounted() {
        this.isEdit = Boolean(this.internshipId)
        if (this.isEdit) {
            this.pageTitle = 'Muuda praktika pakkumist';
            this.getInternshipOffer();
        }

    }

}
</script>