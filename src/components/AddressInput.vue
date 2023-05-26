<template>
    <div class="row">
        <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="card card-body">
                    <form class="row g-3">
                        <div class="input-group col-md-6">
                            <input v-model="addressInput.addressName" type="text" class="form-control" id="addressName"
                                   placeholder="Aadressi nimi" >
                        </div>

                        <div class="col-md-8">
                            <input v-model="addressInput.street" type="text" class="form-control" id="street" placeholder="Tänav">
                        </div>

                        <div class="col-md-4">
                            <input v-model="addressInput.streetNumber" type="text" class="form-control" id="streetNumber"
                                   placeholder="Maja number">

                        </div>
                        <CityDropdown/>
                        <div class="col-md-4">
                            <RegionsDropdown ref="regionNameInputRef" @event-emit-selected-region-id="setSelectedRegionId" />
                        </div>
                        <div class="col-md-4">
                            <input v-model="addressInput.postalCode" type="text" class="form-control" id="postalCode" placeholder="Postiindeks">
                        </div>


                        <div class="input-group mb-2">

                                        <span class="input-group-text" id="basic-addon3"> <a
                                                href="https://www.latlong.net/" class="stretched-link">Abiks</a> </span>

                        </div>

                        <div class="col-md-4">
                            <input v-model="addressInput.latitude" type="text" class="form-control" id="latitude"
                                   placeholder="Laiuskraadid">
                        </div>
                        <div class="col-md-4">
                            <input v-model="addressInput.longitude" type="text" class="form-control" placeholder="Pikkuskraadid" id="longitude">
                        </div>

                        <div class="d-md-flex justify-content-md-end mt-3">
                            <button @click="addNewAddress" type="Address" class="btn btn-primary  mb-3"
                                    id="saveNewAddress">Salvesta uus
                                aadress
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from "@/router";
import RegionsDropdown from "@/components/RegionsDropdown.vue";
import CityDropdown from "@/components/CityDropdown.vue";

export default {
    name: 'AddressInput',
    components: {CityDropdown, RegionsDropdown},

    data() {
        return {

            selectedRegionId: 0,
            successMessage:'',

            addressInput: {
                regionId: '',
                cityId: '',
                companyId: '',
                addressName: '',
                street: '',
                streetNumber: '',
                postalCode: '',
                longitude: '',
                latitude: ''
            }
        }
    },
    methods: {


        addNewAddress() {
            this.$http.post("/address", this.addressInput
            ).then(response => {
                this.successMessage='Uus aadress lisatud'
                router.push({name: 'newOfferRoute'})
            }).catch(error => {
                router.push({name: 'errorRoute'})

            })
        },


        setSelectedRegionId(selectedRegionId) {
            this.selectedRegionId = selectedRegionId

        },


    }
}
</script>