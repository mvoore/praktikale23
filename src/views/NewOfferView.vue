<template>

    <div class="container">
        <div class="row">
            <div class="col col-7 mt-3 text-start">
                <h2>Praktika sisestamine/muutmine</h2>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">




        </div>

    </div>





    <div class="container">
        <div class="row">
            <div class="mt-3 text-start col-8 ">


                <div class="input-group mb-3 ">
                    <input type="text" class="form-control" placeholder="Praktikakoha pealkiri" id="title">
                </div>

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Ettevõtte nimi" id="companyName">
                </div>

                <div class="input-group mb-3">
                    <select class="form-select" id="companyAddress">
                        <option selected>Salvestatud aadressid</option>
                        <option value="1">Tehas</option>
                        <option value="2">Kontor</option>
                        <option value="3">Pood</option>
                    </select>
                </div>

                <p >
                    <a class="btn btn-primary"  data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" >Loo uus aadress</a>
                </p>
                <div class="row">
                    <div class="col">
                        <div class="collapse multi-collapse" id="multiCollapseExample1">
                            <div class="card card-body">
                                <form class="row g-3">
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="addressName" placeholder="Aadressi nimi" >
                                    </div>

                                    <div class="col-md-8">
                                        <input type="text" class="form-control" id="inputAddress" placeholder="Tänav">
                                    </div>

                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="inputAddress" placeholder="Maja number">
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="Linn" id="city">
                                    </div>
                                    <div class="col-md-4">
                                        <select id="region" class="form-select" >
                                            <option selected>Maakond</option>
                                            <option>Harjumaa</option>
                                            <option>Pärnumaa</option>
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <input type="text" class="form-control" id="inputZip" placeholder="Postiindeks">
                                    </div>


                                    <div class="input-group mb-3">

                                        <span class="input-group-text" id="basic-addon3"> <a href="https://www.latlong.net/" class="stretched-link">Abiks</a> </span>
                                        <input type="text" class="form-control" id="latitude" placeholder="Laiuskraad">
                                        <input type="text" class="form-control" id="longitude" placeholder="Pikkuskraad">
                                    </div>
                                    <div class="d-md-flex justify-content-md-end mt-3">
                                        <button type="submit" class="btn btn-primary  mb-3">Salvesta uus aadress</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>




                <div class="input-group mb-3 mt-3">
                    <input type="text" class="form-control" placeholder="Valdkond" id="category">
                </div>

                <div class="mb-3">
                    <input type="email" class="form-control" placeholder="email" id="email">
                </div>

                <div class="input-group">
                    <textarea class="form-control" placeholder="Praktikakoha kirjeldus/info"
                              aria-label="With textarea"></textarea>
                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                    <button class="btn btn-primary me-md-2" type="button">Tagasi profiilile</button>
                    <button class="btn btn-primary me-md-2" type="button">Muuda</button>
                    <button class="btn btn-primary" type="button">Salvesta</button>
                </div>



            </div>
            <div class="col">

                <button type="button" class="btn btn-primary btn-lg"><font-awesome-icon :icon="['fas', 'image']" size="2xl"/></button>
                <div>
                    <router-link to="">Lisa pilt</router-link>
                </div>
            </div>


        </div>


    </div>


</template>

<script>
export default {
    name: "NewOfferView"
}
</script>

<style scoped>

</style>