<head>
<link rel="stylesheet" href="src/assets/my-style.css">
</head>
<template>
    <nav class=" justify-content-center">
        <router-link to="/">Home</router-link> |
        <router-link to="/intern">Intern Home</router-link> |
        <router-link to="/kontakt">Logi välja</router-link> |
        <router-link to="/internships">Praktika pakkumised</router-link>|
        <router-link to="/customer">Pakkuja Home</router-link>|
        <router-link to="/application">Kandideerimine Home</router-link>|
        <router-link to="/new-offer">Praktika lisamine</router-link>
    </nav>
    <LogoutModal ref="logoutModalRef" @event-update-nav-menu="updateNavMenu"/>

<!--  <nav class=" justify-content-center">-->
<!--    <router-link to="/kkk">KKK</router-link>-->
<!--    |-->
<!--    <router-link to="/contact">Kontakt</router-link>-->
<!--  </nav>-->
    <router-view/>
</template>

<scrip>


</scrip>
