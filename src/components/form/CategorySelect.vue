<template>
  <div class="btn-group dropleft">
    <button 
      type="button" 
      class="btn dropdown-toggle btn-category" 
      style="border-radius: 0px;"
      :class="categorySelected ? categorySelected.btn_class : false"
      data-toggle="dropdown" 
      aria-haspopup="true" 
      aria-expanded="false"
    >
      {{ categorySelected ? categorySelected.label : '' }}
    </button>
    <div class="dropdown-menu pb-0">
      <a class="btn btn-block mt-0"
        style="border-radius: 0px;"
        :key="index" 
        v-for="(category, index) in categories" 
        :class="category.btn_class"
        @click="selectCategory(category)">
        <fa v-if="category.icon" :icon="category.icon" /> {{ category.label }}
      </a>
    </div>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  data() {
    return {
      categories: [],
      categorySelected: null,
    }
  },
  created() {
    let api = new ApiService();
    api.getCategories().then(categories => {
      this.categories = categories;
      this.categorySelected = this.categories[0];
    });
  },
  methods: {
    filterCategory(category) {
      this.categorySelected = category
    },
    selectCategory(category) {
      this.categorySelected = category;
      this.$emit('selected', JSON.parse(JSON.stringify(category)));
    },
  }
}
</script>

<style lang="scss" scoped>
  .btn-category {
    @media screen and(min-width: 700px) {
      width: 300px;
    }
  }
</style>