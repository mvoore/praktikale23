<template>

  <div class="container">
    <div class="row">
      <div class="col col-7 mt-3 text-start">
        <h2>{{ pageTitle }}
          <font-awesome-icon :icon="['fas', 'user-pen']" size="xs" class="ms-5"/>
        </h2>

      </div>
    </div>
  </div>


    <div class="container">
        <div class="row">
            <div class="mt-3 text-start col-8 ">


                <div class="input-group mb-3 ">
                    <input type="text" class="form-control" placeholder="Praktikakoha pealkiri" id="title">
                </div>
              <AddressesDropdown/>

                <p >
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
                       aria-expanded="false" aria-controls="multiCollapseExample1">Loo uus aadress</a>
                </p>
                <AddressInput />



                <div class="col mb-3 mt-3">
                    <CategoriesDropdown @event-emit-selected-category-id="setSelectedCategoryId"/>
                </div>

                <div class="input-group">
                    <textarea class="form-control" placeholder="Praktikakoha kirjeldus/info"
                              id="description" aria-label="With textarea" rows="10" cols="50"></textarea>
                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                    <button class="btn btn-primary me-md-2" type="button">Tagasi profiilile</button>
                    <button class="btn btn-primary me-md-2" type="button">Muuda</button>
                    <button @click="addInternship" class="btn btn-primary" type="button">Salvesta</button>
                </div>


            </div>
            <div class="col">

                <button type="button" class="btn btn-primary btn-lg">
                    <font-awesome-icon :icon="['fas', 'image']" size="2xl"/>
                </button>
                <div>
                    <router-link to="">Lisa pilt</router-link>
                </div>
            </div>


        </div>


    </div>


</template>

<script>


import router from "@/router";
import CategoriesDropdown from "@/components/CategoriesDropdown.vue";
import AddressInput from "@/components/AddressInput.vue";
import AddressesDropdown from "@/views/AddressesDropdown.vue";

export default {
    name: "NewOfferView",
    components: {AddressesDropdown, AddressInput, CategoriesDropdown},

    data() {
        return {

            selectedCategoryId: 0,
            selectedAddressId:0,

            newInternshipRequest: {
                userId: sessionStorage.getItem('userId'),
                title: '',
                categoryId: '',
                description: '',
                imageData: ''

            }
        }
    },
    methods: {
        addInternship: function () {
            this.$http.post("/new-offer", this.newInternshipRequest
            ).then(response => {
                const responseBody = response.data
                router.push({name: 'customerRoute'})

            }).catch(error => {
                const errorResponseBody = error.response.data
                router.push({name: 'errorRoute'})

            })


        },
        setSelectedCategoryId(selectedCategoryId) {
            this.selectedCategoryId = selectedCategoryId
        },

        setSelectedCityId(selectedCityId) {
            this.selectedCityId =selectedCityId
        },



    }

}
</script>