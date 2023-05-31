<template>
    <div>
        <input type="file" @change="handleImage" accept="image/x-png,image/jpeg,image/gif">
    </div>
</template>

<script>
export default {
    name: 'ImageInput',
    data() {
        return {
            imageData: ''
        }
    },
    methods: {
        handleImage(event) {
            const selectedImage = event.target.files[0];
            this.emitImageData(selectedImage);
        },

        emitImageData(fileObject) {
            const reader = new FileReader();
            reader.onload = () => {
                this.imageData = reader.result;
                this.$emit('event-emit-image-data', this.imageData)
            };
            reader.onerror = function (error) {
                alert(error);
            }
            reader.readAsDataURL(fileObject);
        },

        setPictureDataBase64(pictureDataBase64) {
            this.imageData = pictureDataBase64
        },
    }
}
</script>