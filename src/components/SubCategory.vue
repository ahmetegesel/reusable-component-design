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
import { getCategoriesByParent } from '../../lib/mockApi';

export default {
  name: 'SubCategory',
  props: {
    model: {
      type: Number,
    },
    parent: {
      type: Number,
    },
  },
  data() {
    return {
      lazyModel: undefined,
      categories: [],
    };
  },
  methods: {
    async getCategories(parent) {
      console.log('parent', parent, this.lazyModel);
      return getCategoriesByParent(parent);
    },
  },
  watch: {
    model(value) {
      this.lazyModel = value;
    },
    async parent(value, oldValue) {
      if (value !== oldValue) {
        this.categories = await this.getCategories(value);
      }
    },
  },
};
</script>
