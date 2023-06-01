<template>
    <table class="table table-dark table-hover">
        <thead>
        <tr>
            <th scope="col">Pakkumise pealkiri</th>
            <th scope="col">Ettevõtte nimi</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="application in internActiveApplications" :key="application.userId">
            <td>{{ application.internshipTitle }}</td>
            <td>{{ application.internshipCompanyName }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import router from '@/router';
import DeactivateInternshipModal from "@/components/modal/DeactivateInternshipModal.vue";

export default {
    name: 'InternActiveApplicationsTable',

    data() {
        return {
            userId: sessionStorage.getItem('userId'),


            internActiveApplications:

                {
                    applicationId: 0,
                    internshipId: 0,
                    internshipTitle: '',
                    internshipCompanyName: ''
                }


        }
    },
    methods: {
        getApplications: function () {
            this.$http.get("/intern/applications", {
                    params: {
                        userId: this.userId,
                    }
                }
            ).then(response => {
                this.internActiveApplications = response.data
            }).catch(error => {
                router.push({name: 'errorRoute'})
            })
        },


    },
    beforeMount() {
        this.getApplications()
    }
}
</script>
