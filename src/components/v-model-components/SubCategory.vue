<template>
  <div>
    <select v-model="lazyValue" @change="onSubCategoryChanged">
      <option v-for="(category ,key) in categories" :key="`category-${key}`"
              v-bind:value="category.id">
        {{category.name}}
      </option>
    </select>
  </div>
</template>

<script>
import { getCategoriesByParent } from '../../../lib/mockApi';

export default {
  name: 'SubCategory',
  props: {
    value: {
      type: Number,
    },
    parent: {
      type: Number,
    },
  },
  data() {
    return {
      lazyValue: undefined,
      categories: [],
    };
  },
  methods: {
    async getCategories(parent) {
      return getCategoriesByParent(parent);
    },
    onSubCategoryChanged() {
      this.$emit('input', this.lazyValue);
    }
  },
  watch: {
    value(value) {
      this.lazyValue = value;
    },
    async parent(value, oldValue) {
      if (value !== oldValue) {
        this.categories = await this.getCategories(value);

        if (oldValue) {
          this.lazyValue = undefined;
        }
      }
    },
  },
};
</script>
