<template>

    <div class="container">
        <div class="row mb-3">
            <div class="col">
                <SortDropdown/>
            </div>
            <div class="col">
                <DistrictsDropdown/>
            </div>
            <div class="col">
                <CategoriesDropdown/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <table class="table table-dark table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Ettevõtte nimi</th>
                        <th scope="col">Asukoht</th>
                        <th scope="col">Valdkond</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Merko</td>
                        <td>Harjumaa</td>
                        <td>Ehitus</td>
                    </tr>
                    <tr>
                        <td>Mäkk</td>
                        <td>Harjumaa</td>
                        <td>Kokandus</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>












</template>

<script>
import SortDropdown from "@/components/SortDropdown.vue";
import DistrictsDropdown from "@/components/DistrictsDropdown.vue";
import CategoriesDropdown from "@/components/CategoriesDropdown.vue";

export default {
    name: "InternshipsView",
    components: {CategoriesDropdown, DistrictsDropdown, SortDropdown}
}
</script>