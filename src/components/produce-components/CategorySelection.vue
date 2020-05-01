<template>
  <div>
    <category ref="category" :model="lazyCategory"/>
    <sub-category ref="subCategory" :model="lazySubCategory" :parent="lazyCategory"/>
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
      type: Number,
    },
    subCategory: {
      type: Number,
    },
  },
  data() {
    return {
      lazyCategory: undefined,
      lazySubCategory: undefined,
    };
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
