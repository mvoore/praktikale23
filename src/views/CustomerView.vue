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
            <div class="col col-3 mt-2 text-decoration-underline">
              Lisa uus pakkumine
              <router-link to="/new-offer" style="">
                <font-awesome-icon :icon="['fas', 'plus']" size="xl" class="ms-2"/>
              </router-link>
            </div>
            <div class="row">
              <div class="col col-6 text-start mt-2">
                <p><strong>Minu aktiivsed pakkumised</strong></p>
                <CompanyActiveInternshipsTable ref="companyActiveInternshipsTableRef"
                                               @event-refreshed-company-active-internships="refreshCompanyInactiveInternshipsTable"/>
              </div>
              <div class="col col-6 text-start mt-2">
                <p><strong> Minu mitteaktiivsed pakkumised</strong></p>
                <CompanyInactiveInternshipsTable ref="companyInactiveInternshipsTableRef"
                                                 @event-refreshed-company-inactive-internships="refreshCompanyActiveInternshipsTable"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyActiveInternshipsTable from "@/components/CompanyActiveInternshipsTable.vue";
import CompanyDataComponent from "@/components/CompanyDataComponent.vue";
import CompanyInactiveInternshipsTable from "@/components/CompanyInactiveInternshipsTable.vue";

export default {
  name: "CustomerView",
  components: {CompanyActiveInternshipsTable, CompanyInactiveInternshipsTable, CompanyDataComponent},
  data() {
    return {
      userId: sessionStorage.getItem('userId')
    }
  },
  methods: {
    refreshCompanyActiveInternshipsTable(messageFromGrandChild) {
      this.$refs.companyActiveInternshipsTableRef.getCompanyActiveInternships()
      // todo alert
      alert(messageFromGrandChild)
    },
    refreshCompanyInactiveInternshipsTable(messageFromGrandChild) {
      this.$refs.companyInactiveInternshipsTableRef.getCompanyInactiveInternships()
      alert(messageFromGrandChild)
    },
  }

}
</script>
