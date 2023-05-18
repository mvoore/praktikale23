<head>
<link rel="stylesheet" href="src/assets/my-style.css">
</head>
<template>
    <div class="home">
        <div class="container">
            <div>
                <div class="custom-spacing">
                    <label for="username" class="form-label">Kasutajanimi</label>
                    <input v-model="username" type="text" class="form-control" id="username">
                </div>
                <div class="custom-spacing">
                    <label for="password" class="form-label">Salasõna</label>
                    <input v-model="password" type="password" class="form-control" id="password">
                </div>
                <button @click="login" type="submit" class="btn btn-primary">Logi sisse</button>
                <div class="custom-spacing">
                    <router-link to="/registreerimine">Loo kasutaja</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'HomeView'
}

</script>
