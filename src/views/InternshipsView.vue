<template>
    <div class="container">
        <div class="row mb-3">
            <div class="col">
                <SortDropdown/>
            </div>
            <div class="col">
                <RegionsDropdown @event-emit-selected-region-id="setSelectedRegionId"/>
            </div>
            <div class="col">
                <CategoriesDropdown @event-emit-selected-category-id="setSelectedCategoryId"/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <table class="table table-dark table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Valdkond</th>
                        <th scope="col">Ettevõtte nimi</th>
                        <th scope="col">Ametikoht</th>
                        <th scope="col">Lisamise kuupäev</th>
                        <th scope="col"><font-awesome-icon :icon="['fas', 'image']" /></th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Merko</td>
                        <td>Harjumaa</td>
                        <td>Ehitus</td>
                        <td>2023-05-05</td>
                        <td>LOGO</td>
                    </tr>
                    <tr>
                        <td>Mäkk</td>
                        <td>Harjumaa</td>
                        <td>Kokandus</td>
                        <td>2023-05-05</td>
                        <td>LOGO</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
import SortDropdown from "@/components/SortDropdown.vue";
import RegionsDropdown from "@/components/RegionsDropdown.vue";
import CategoriesDropdown from "@/components/CategoriesDropdown.vue";

export default {
    name: "InternshipsView",
    components: {
        CategoriesDropdown,
        RegionsDropdown,
        SortDropdown
    },

    data() {
        return {
            selectedRegionId: 0,
            selectedCategoryId: 0,
        }
    },

    methods: {
        setSelectedRegionId(selectedRegionId) {
            this.selectedRegionId = selectedRegionId

        },
        setSelectedCategoryId(selectedCategoryId) {
            this.selectedCategoryId = selectedCategoryId

        },
    },



}

</script>