<template>
    <img v-if="imageData === ''" src="../assets/company-logo-default.jpg" class="img-thumbnail small-image" />
    <img v-else :src="imageData" class="img-thumbnail small-image">
</template>
<script>
export default {
    name: 'InternshipImage',
    props: {
        imageData: String
    }
}
</script>