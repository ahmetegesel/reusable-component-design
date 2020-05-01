<template>
  <div>
    <select v-model="lazyModel">
      <option v-for="(category ,key) in categories" :key="`category-${key}`"
              v-bind:value="category.id">
        {{category.name}}
      </option>
    </select>
  </div>
</template>

<script>
import { getMainCategories } from '../../../lib/mockApi';

export default {
  name: 'Category',
  props: {
    model: {
      type: Number,
    },
  },
  data() {
    return {
      lazyModel: {},
      categories: [],
    };
  },
  async mounted() {
    this.categories = await getMainCategories();
  },
  watch: {
    model(value) {
      this.lazyModel = value;
    },
  },
};
</script>
