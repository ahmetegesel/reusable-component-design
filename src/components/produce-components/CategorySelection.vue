<template>
  <div>
    <category ref="category" field="categoryId" :value="lazyCategory" @change="onCategoryChanged"/>
    <sub-category
      ref="subCategory"
      field="subCategoryId"
      :value="lazySubCategory"
      :parent="lazyCategory"/>
  </div>
</template>

<script>
import Category from './Category';
import SubCategory from './SubCategory';

export default {
  name: 'CategorySelection',
  components: {
    Category,
    SubCategory,
  },
  props: {
    category: {
      type: String,
    },
    subCategory: {
      type: String,
    },
  },
  data() {
    return {
      lazyCategory: undefined,
      lazySubCategory: undefined,
    };
  },
  methods: {
    produce() {
      return {
        ...this.$refs.category.produce(),
        ...this.$refs.subCategory.produce()
      };
    },
    onCategoryChanged(value) {
      this.lazyCategory = value;
    }
  },
  watch: {
    category(value) {
      this.lazyCategory = value;
    },
    subCategory(value) {
      this.lazySubCategory = value;
    },
  },
};
</script>
