<template>
  <div>
    <p-field ref="selectField" :field="field">
      <p-select
        :items="categories"
        :value="lazyValue"
        @change="onSelectChanged"
        :item-value="'id'"></p-select>
    </p-field>
  </div>
</template>

<script>
import { getMainCategories } from '../../../lib/mockApi';
import PField from './generic/base/PField';
import PSelect from './generic/PSelect';

export default {
  name: 'Category',
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
      default: 'category'
    },
  },
  data() {
    return {
      lazyValue: {},
      categories: [],
    };
  },
  methods: {
    produce() {
      return this.$refs.selectField.produce();
    },
    onSelectChanged(value) {
      this.lazyValue = value;
      this.$emit('change', value);
    }
  },
  async mounted() {
    this.categories = await getMainCategories();
  },
  watch: {
    value(value) {
      this.lazyValue = value;
    },
  },
};
</script>
