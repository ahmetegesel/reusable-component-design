<template>
  <div>
    <category ref="category" v-model="lazyCategory"/>
    <sub-category ref="subCategory" v-model="lazySubCategory" :parent="lazyCategory"/>
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
      lazyCategory: '',
      lazySubCategory: '',
    };
  },
  watch: {
    category(value) {
      this.lazyCategory = value;
    },
    subCategory(value) {
      this.lazySubCategory = value;
    },
    lazyCategory(value) {
      this.$emit('update:category', value);
    },
    lazySubCategory(value) {
      this.$emit('update:subCategory', value);
    },
  },
};
</script>
