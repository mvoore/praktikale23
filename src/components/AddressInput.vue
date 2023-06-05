<template>
    <div class="row">
        <div class="col">
            <div class="card card-body">
                <form class="row g-3">
                    <div class="input-group col-md-6">
                        <input v-model="addressInputRequest.addressName" type="text" class="form-control"
                               id="addressName"
                               placeholder="Aadressi nimi">
                    </div>

                    <div class="col-md-8">
                        <input v-model="addressInputRequest.street" type="text" class="form-control" id="street"
                               placeholder="Tänav">
                    </div>

                    <div class="col-md-4">
                        <input v-model="addressInputRequest.streetNumber" type="text" class="form-control"
                               id="streetNumber"
                               placeholder="Maja number">

                    </div>
                    <CityDropdown @event-emit-selected-city-id="setCityId"/>
                    <div class="col-md-4">
                        <RegionsDropdown @event-emit-selected-region-id="setRegionId"/>
                    </div>
                    <div class="col-md-4">
                        <input v-model="addressInputRequest.postalCode" type="text" class="form-control" id="postalCode"
                               placeholder="Postiindeks">
                    </div>


                    <div class="col-md-4">
                        <input v-model="addressInputRequest.latitude" type="text" class="form-control" id="latitude"
                               placeholder="Laiuskraadid">
                    </div>
                    <div class="col-md-4 mb-4">
                        <input v-model="addressInputRequest.longitude" type="text" class="form-control"
                               placeholder="Pikkuskraadid" id="longitude">
                    </div>
                    <div class="input-group mb-2">

                                        <span class="input-group-text" id="basic-addon3"> <a
                                                href="https://www.latlong.net/" class="stretched-link">Abiks pikkus/laiuskraadi leidmisel</a> </span>
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
            selectedCityId: 0,
            successMessage: '',

            addressInputRequest: {
                regionId: 0,
                cityId: 0,
                userId: sessionStorage.getItem('userId'),
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
            this.$http.post("/address", this.addressInputRequest
            ).then(response => {

                router.push({name: 'newOfferRoute'})

            }).catch(error => {
                router.push({name: 'errorRoute'})

            })

        },
        setCityId(selectedCityId) {
            this.addressInputRequest.cityId = selectedCityId
        },
        setRegionId(selectedRegionId) {
            this.addressInputRequest.regionId = selectedRegionId
        },


    }
}
</script>