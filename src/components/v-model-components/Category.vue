<template>
  <div>
    <select v-model="lazyValue" @change="onCategoryChanged">
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
    value: {
      type: Number,
    },
  },
  data() {
    return {
      lazyValue: {},
      categories: [],
    };
  },
  async mounted() {
    this.categories = await getMainCategories();
  },
  methods: {
    onCategoryChanged() {
      this.$emit('input', this.lazyValue);
    }
  },
  watch: {
    value(value) {
      this.lazyValue = value;
    },
  },
};
</script>
