<template>
  <div>
    <p-field ref="selectField" :field="field">
      <p-select :items="categories" :value="lazyValue" :item-value="'id'"></p-select>
    </p-field>
  </div>
</template>

<script>
import { getCategoriesByParent } from '../../../lib/mockApi';
import PField from './generic/base/PField';
import PSelect from './generic/PSelect';

export default {
  name: 'SubCategory',
  components: {
    PField,
    PSelect
  },
  props: {
    value: {
      type: String,
    },
    field: {
      type: String,
      default: 'subCategory'
    },
    parent: {
      type: String,
    },
  },
  data() {
    return {
      lazyValue: undefined,
      categories: [],
    };
  },
  methods: {
    produce() {
      return this.$refs.selectField.produce();
    },
    async getCategories(parent) {
      return getCategoriesByParent(parent);
    },
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
