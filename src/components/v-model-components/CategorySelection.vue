<template>
  <div>
    <category ref="category" v-model="lazyValue.category"/>
    <sub-category ref="subCategory" v-model="lazyValue.subCategory" :parent="lazyValue.category"/>
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
    value: {
      type: Object,
    },
  },
  data() {
    return {
      lazyValue: {
        category: undefined,
        subCategory: undefined
      },
    };
  },
  watch: {
    value(value) {
      this.lazyValue = value;
    },
    lazyValue: {
      deep: true,
      handler(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
