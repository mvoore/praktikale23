<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col mt-5">
                <h3>Registreeri ennast siin: </h3>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col col-2">
                <div class="mb-2 mt-5">
                    <label for="username" class="form-label">Sisesta kasutajanimi</label>
                    <input v-model="username" class="form-control" id="username"  >
                </div>
                <div class="mb-2">
                    <label for="password" class="form-label">Parool</label>
                    <input v-model="password" type="password" class="form-control" id="password">
                </div>
                <div class="mb-2">
                    <label for="password" class="form-label">Parool uuesti</label>
                    <input v-model="password" type="password" class="form-control" id="password">
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="role" id="intern">
                    <label class="form-check-label" >
                        Olen praktika otsija
                    </label>
                </div>
                <div class="form-check mb-5" >
                    <input class="form-check-input" type="radio" name="role" id="customer" checked>
                    <label class="form-check-label" >
                        Olen praktika pakkuja
                    </label>
                </div>




                <button @click="login" type="submit" class="btn btn-primary" >Registreeri</button>
            </div>
        </div>
        <div class="row">

        </div>
    </div>
</template>

<script>
export default {
    name: "SignUpView"
}
</script>

<style scoped>

</style>