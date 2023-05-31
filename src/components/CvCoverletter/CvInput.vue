<template>
    <div>
        <input type="file" @change="handleFile" accept=".docx,application/pdf">
    </div>
</template>

<script>
export default {
    name: 'CvInput',
    data() {
        return {
            dataBase64: ''
        }
    },
    methods: {
        handleFile(event) {
            const selectedImage = event.target.files[0];
            this.emitBase64(selectedImage);
        },

        emitBase64(fileObject) {
            const reader = new FileReader();
            reader.onload = () => {
                this.dataBase64 = reader.result;
                this.$emit('event-emit-base64', this.dataBase64)
            };
            reader.onerror = function (error) {
                alert(error);
            }
            reader.readAsDataURL(fileObject);
        },

        setPictureDataBase64(pictureDataBase64) {
            this.dataBase64 = pictureDataBase64
        },
    }
}
</script>