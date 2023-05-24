<template>


  <select v-model="selectedCategoryId" @change="emitSelectedCategoryId" class="form-select"
          aria-label="Default select example">
    <option selected value="0">Kõik valdkonnad</option>
    <option v-for="category in categories" :key="category.categoryId" :value="category.categoryId">
      {{ category.categoryName }}
    </option>
  </select>


</template>

<script>
import router from "@/router";

export default {
  name: 'CategoriesDropdown',

  data() {
    return {
      selectedCategoryId: '0',
      categories:
          [
            {
              categoryId: 0,
              categoryName: ''
            }
          ]
    }
  },

  methods: {


    emitSelectedCategoryId() {
      this.$emit('event-emit-selected-category-id', Number(this.selectedCategoryId))
    },


    getCategories() {
      this.$http.get("/categories")
          .then(response => {
            this.categories = response.data;
          }).catch(error => {
        router.push({name: 'errorRoute'})
      })

    },

    setSelectedCategoryId(categoryId) {
      this.selectedCategoryId = categoryId

    },

  },
  beforeMount() {
    this.getCategories();
  }

}
</script>