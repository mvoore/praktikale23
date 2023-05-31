<template>
  <div class="container">
    <div class="row">
      <div class="col col-7 mt-3 text-start">
        <div>
          <div class="container">
            <div class="row">
              <CompanyDataComponent ref="companyDataComponentRef"/>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col col-6">
                <p><strong>Minu aktiivsed pakkumised</strong></p>
                <CompanyActiveInternshipsTable ref="companyActiveInternshipsTableRef"/>
              </div>
              <div class="col col-6">
                <p><strong> Minu mitteaktiivsed pakkumised</strong></p>
                <CompanyInactiveInternshipsTable ref="companyInactiveInternshipsTableRef"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-5 mt-5">
        Lisa uus pakkumine
        <router-link to="/new-offer">
          <font-awesome-icon :icon="['fas', 'plus']" size="xl" class="ms-2"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import CompanyInternshipsTable from "@/components/CompanyActiveInternshipsTable.vue";
import CompanyDataComponent from "@/components/CompanyDataComponent.vue";
import CompanyInactiveInternshipsTable from "@/components/CompanyInactiveInternshipsTable.vue";
import CompanyActiveInternshipsTable from "@/components/CompanyActiveInternshipsTable.vue";

export default {
  name: "CustomerView",
  components: {CompanyActiveInternshipsTable, CompanyInactiveInternshipsTable, CompanyDataComponent},
  data() {
    return {
      userId: sessionStorage.getItem('userId')
    }
  },
  methods: {}

}
</script>
